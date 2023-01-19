import React, { useEffect, useRef, useState } from "react";

//Section Users
const users = [
    { name: 'John', age: 20 },
    { name: 'Alex', age: 25 },
    { name: 'Mike', age: 30 },
]

interface User {
    name: string;
    age: number;
}

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<User | undefined>();

    useEffect(() => {
        if (!inputRef.current)
            return;
        inputRef.current.focus();
    }, [])

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    }

    return (
        <div>
            User Search
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button></div>
    )
}

export default UserSearch;