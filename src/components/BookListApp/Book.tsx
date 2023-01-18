import { Author } from "./Author";
import {Image} from "./Image";
import { Title } from "./Title";
import React from "react";
import {Button} from "@mui/material";
import { BookFunctionProps } from "./interfaces/IBookFunctionProps";

export const Book = (props: BookFunctionProps, key: number) => {
    const {children, onBookClick, id, author, url, title, number} = props;

    return (
        <article className={"Book"}>
            <Image url={url}/>
            {/*<Image url={'./assets/bookCover1.jpg'}/>*/}
            <Title title={title}/>
            <Button onClick={() => onBookClick(id)}>Click</Button>
            <Author author={author}/>
            <span className={'number'}>{`# ${number + 1}`}</span>
            {children}
        </article>
    );
}