import {useState} from "react";
import {data} from "../data";

const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id: number) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return (
        <>
            {people.map(({id, name}) => {
                return (
                    <div key={id} className={'item'}>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>Remove Item</button>
                    </div>
                )
            })}
            <button className={'btn'} onClick={() => setPeople([])}>Clear Items</button>
        </>
    );
}

export default  UseStateArray ;