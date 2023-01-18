import React from "react";


export const EventExamples: React.FC = () => {

    const handleFormInput:  React.ChangeEventHandler<HTMLInputElement> | undefined = (event) => {
        console.log(`Input Value: ${event.target.value}`);
    };

    const handleFormSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (event) => {
        event.preventDefault();
        console.log('form submitted');
    }

    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <h2>Typical Form</h2>
                <input
                    type={'text'}
                    name={'example'}
                    onChange={handleFormInput}
                    style={{margin: '1rem 0'}}></input>
                <button onClick={()=> alert('button clicked')} type={'button'}>Click me</button>
                <button type={'submit'}>Submit</button>
            </form>
        </section>
    );
}