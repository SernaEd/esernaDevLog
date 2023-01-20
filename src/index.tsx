import ReactDOM from "react-dom/client";
import React from "react";

// import "./components/BookListApp/styles/index.css";
// import "./components/BackroadsApp/styles/styles.css";
import {AdvancedTutorialApp} from "./react-advanced-tutorial/AdvancedTutorialApp";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <React.StrictMode>
            <AdvancedTutorialApp/>
        </React.StrictMode>
    );
};

root.render(<App/>);