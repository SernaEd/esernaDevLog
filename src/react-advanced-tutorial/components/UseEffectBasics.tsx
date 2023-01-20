import {useEffect, useState} from "react";

export const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title =
            value > 0 ?
                `New Messages(${value})` :
                `No New Messages`;
    },[value]);

    return (
        <>
            <h1>{value}</h1>
            <button className={'btn'} onClick={()=>setValue(value+1)}>
                Increase
            </button>
        </>
    );
}