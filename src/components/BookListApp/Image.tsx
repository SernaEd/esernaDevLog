import React from "react";

interface ImageProps {
    url: string;
}
export const Image: React.FC<ImageProps> = (props) => {
    return (
        <img src={props.url} alt={'BookCover'}/>
    );
}