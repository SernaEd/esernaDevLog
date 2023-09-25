import React from "react";

interface ListProps{
    people: {
        id: number;
        name: string;
        age: number;
        image: string;
    }[];
}

export const List: React.FC<ListProps> = ({people}) => {
    return (
        <>
            {people.map((person) => {
                const {id, name, age, image} = person;
                return (
                    <article key={id} className="person">
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </>
    );
}