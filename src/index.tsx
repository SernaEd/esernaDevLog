import ReactDOM from "react-dom/client";
import UserSearch from "./refs/UserSearch";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <div>
            <UserSearch/>
        </div>
    );
};

root.render(<App />);