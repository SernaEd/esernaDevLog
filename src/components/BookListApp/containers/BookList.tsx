import React from "react";
import {Book} from "../Book";
import {Button} from "@mui/material";
import {EventExamples} from "../EventExamples";
import { books } from "../data/booksData";

export const BookList: React.FC = () => {
    const getBook = (id: number) => {
        const foundBook = books.find((book) =>
            book.id === id
        )
        console.log(foundBook);
    };

    const buttonClickHandler = () => {
        console.log("button clicked")
    };

    return (
        <div className={'BookList'}>
            <h1>Amazon Best Sellers</h1>
            <EventExamples/>
            {books.map((book, index) => {
                    return <Book {...book} onBookClick={getBook} key={book.id} number={index}>
                        <Button onClick={buttonClickHandler}>Info</Button>
                    </Book>
            })}
        </div>
    );
}
