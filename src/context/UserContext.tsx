import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { onAuthStateChanged, User, getRedirectResult } from 'firebase/auth';
import { auth, ALLOWED_USERS } from '../firebase';

export type UserType = 'regular' | 'verified' | 'unauthorized';

interface UserContextType {
    user: User | null;
    userType: UserType;
    setUserType: (type: UserType) => void;
    isVerified: boolean;
    isAuthorized: boolean;
    loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [userType, setUserType] = useState<UserType>('regular');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                if (ALLOWED_USERS.includes(firebaseUser.email || "")) {
                    setUser(firebaseUser);
                    setUserType('verified');
                } else {
                    setUser(null);
                    setUserType('unauthorized');
                    // Automatically sign out unauthorized users
                    auth.signOut();
                }
            } else {
                setUser(null);
                setUserType('regular');
            }
            setLoading(false);
        });

        // Handle the result of a redirect sign-in
        getRedirectResult(auth)
            .then((result) => {
                if (result?.user) {
                    if (ALLOWED_USERS.includes(result.user.email || "")) {
                        setUser(result.user);
                        setUserType('verified');
                    } else {
                        setUser(null);
                        setUserType('unauthorized');
                        auth.signOut();
                    }
                }
            })
            .catch((error: any) => {
                console.error("Error with redirect sign-in result", error);
                if (error.code === 'auth/configuration-not-found') {
                    // This error is usually handled in the UI, but we log it here for debugging
                    console.warn("Firebase configuration error detected in UserContext");
                }
            });

        return () => unsubscribe();
    }, []);

    const isVerified = userType === 'verified';
    const isAuthorized = userType === 'verified';

    return (
        <UserContext.Provider value={{ user, userType, setUserType, isVerified, isAuthorized, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
