import ReactDOM from "react-dom/client";
import React from "react";
import {BookList} from "./components/BookListApp/containers/BookList";

import "./components/BookListApp/styles/index.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <>
            <BookList/>
        </>
    );
};

root.render(<App/>);