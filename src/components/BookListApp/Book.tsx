import { Author } from "./Author";
import {Image} from "./Image";
import { Title } from "./Title";
import React from "react";
import {Button} from "@mui/material";
import { BookFunctionProps } from "./interfaces/IBookFunctionProps";

export const Book = (props: BookFunctionProps) => {
    const {children, onBookClick, id, author, url, title, number} = props;

    return (
        <article className={"Book"}>
            <Image url={url}/>
            <Title title={title}/>
            <Button onClick={() => onBookClick(id)}>Click</Button>
            <Author author={author}/>
            <span className={'number'}>{`# ${number + 1}`}</span>
            {children}
        </article>
    );
}