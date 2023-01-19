import {socialLinks} from "../data/data";
import React from "react";

interface SocialLinksProps {
    location: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({location}) => {
    return (
        <>
            {socialLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={link.href}
                           target={'_blank'}
                           rel={'noreferrer'}
                           className={location}>
                            <i className={link.icon}/>
                        </a>
                    </li>
                )
            })}
        </>
    );
}