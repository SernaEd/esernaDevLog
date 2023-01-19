import React from "react";

import logo from "../images/logo.svg";
import {PageLinks} from "./PageLinks";
import {SocialLinks} from "./SocialLinks";

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads"/>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    <PageLinks location={'nav-link'}/>
                </ul>

                <ul className="nav-icons">
                    <SocialLinks location={'nav-icon'}/>
                </ul>
            </div>
        </nav>
    );
}