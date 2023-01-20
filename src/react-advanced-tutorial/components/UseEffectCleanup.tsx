import {useEffect, useState} from "react";

export const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {setSize(window.innerWidth)};

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    });

    return (
        <>
            <h1>Window</h1>
            <h2>{size} PX</h2>
        </>
    );
}