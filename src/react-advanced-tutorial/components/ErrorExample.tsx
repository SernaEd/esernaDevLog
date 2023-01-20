import React, {useState} from "react";

const ErrorExample = () => {
    const [title, setTitle] = useState('random title');

    const handleClick = () => {
        setTitle('hello people');
    }

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type={'button'} className={'btn'} onClick={handleClick}>Change Title</button>
        </React.Fragment>
    );
}

export default ErrorExample;