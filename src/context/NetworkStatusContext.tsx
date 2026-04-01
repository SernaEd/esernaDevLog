import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NetworkStatusContextType {
    isOnline: boolean;
}

const NetworkStatusContext = createContext<NetworkStatusContextType>({ isOnline: true });

export const NetworkStatusProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <NetworkStatusContext.Provider value={{ isOnline }}>
            {children}
        </NetworkStatusContext.Provider>
    );
};

export const useNetworkStatus = () => useContext(NetworkStatusContext);
