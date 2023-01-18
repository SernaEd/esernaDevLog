import React from "react";

interface TitleProps {
    title: string;
}

export const Title: React.FC<TitleProps> = (props) => {
    return (
        <h4>{props.title}</h4>
    );
}