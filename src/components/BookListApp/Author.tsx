import React from "react";
import "./styles/author.css";

interface AuthorProps {
    author: string;
}

export const Author: React.FC<AuthorProps> = ({author}) => {
    return (
        <h4 className={'Author'}>{author}</h4>
    );
}