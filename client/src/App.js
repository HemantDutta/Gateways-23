import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicHome} from "./pages/PublicHome";
import {PublicAbout} from "./pages/PublicAbout";
import {Event} from "./pages/Event";
import {Contact} from "./pages/Contact";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PublicHome/>}/>
                    <Route path={"/about"} element={<PublicAbout/>}/>
                    <Route path={"/event"} element={<Event/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
