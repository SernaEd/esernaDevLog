import ReactDOM from "react-dom/client";
import React from "react";
import ToggleColorMode from "./components/Styles/ColorMode";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element!);

const App = () => {
    return (
        <React.StrictMode>
            <ToggleColorMode/>
        </React.StrictMode>
    );
};

root.render(<App/>);