// import "./App.css";
import Routing from "./Routing";
import { LanguageProvider } from "./context/page";
import ClassComponent from "./page/ClassComponent";
import FunctionalComponent from "./page/FunctionalComponent";

function App() {
    return (
        <LanguageProvider>
            <Routing />
        </LanguageProvider>
    );
}

export default App;
