import { Navbar } from "./components/Navbar";
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Services} from "./components/Services";
import {Tours} from "./components/Tours";
import {Footer} from "./components/Footer";

export const BackroadsApp = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Tours />
            <Footer />
        </>
    );
}