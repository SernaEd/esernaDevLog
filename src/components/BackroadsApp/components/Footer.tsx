import {PageLinks} from "./PageLinks";
import {SocialLinks} from "./SocialLinks";
export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                <PageLinks location={'footer-link'}/>
            </ul>
            <ul className="footer-icons">
                <SocialLinks location={'footer-icon'}/>
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
}