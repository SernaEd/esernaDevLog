import {useState} from "react";

export const UseStateCounter = () => {
    const [value, setValue] = useState(0);
    const handleDecrease = () => {
        setValue(value - 1);
    }

    const handleReset = () => {
        setValue(0);
    }

    const handleIncrease = () => {
        setValue(value + 1);
    }

    const complexIncrease = () => {
        setTimeout(() => {
            setValue((prevState) => {
                return prevState + 1;
            });
        }, 2000);
    }

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>Regular Counter</h2>
                <h1>{value}</h1>
                <button className={'btn'} onClick={handleDecrease}>
                    decrease
                </button>
                <button className={'btn'} onClick={handleReset}>
                    reset
                </button>
                <button className={'btn'} onClick={handleIncrease}>
                    increase
                </button>
            </section>
            <section style={{margin: '4rem 0'}}>
                <h2>Complex Counter</h2>
                <h1>{value}</h1>
                <button className={'btn'} onClick={complexIncrease}>
                    increase later
                </button>

            </section>
        </>
    );
}