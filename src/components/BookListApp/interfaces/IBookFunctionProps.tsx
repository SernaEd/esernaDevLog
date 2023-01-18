import {BookProps} from "./IBookProps";
import React from "react";

export interface BookFunctionProps extends BookProps {
    onBookClick: (id: number) => void,
    children?: React.ReactNode,

    number: number,
}