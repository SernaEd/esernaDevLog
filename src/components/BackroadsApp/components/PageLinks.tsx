import {pageLinks} from "../data/data";
import React from "react";

interface PageLinksProps {
    location: string;
}

export const PageLinks: React.FC<PageLinksProps> = ({location}) => {
    return (
        <>
            {pageLinks.map((link, index) => {
                return (
                    <li key={index}>
                        <a href={link.href} className={location}>{link.text}</a>
                    </li>
                )
            })}
        </>

    );
}