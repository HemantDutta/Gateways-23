import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicHome} from "./pages/PublicHome";
import EventDetails from "./pages/EventDetails";
import {Events} from "./pages/Events";
import {PublicAbout} from "./pages/PublicAbout";
import {Event} from "./pages/Event";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PublicHome/>}/>
                    <Route path={"/about"} element={<PublicAbout/>}/>
                    <Route path={"/event"} element={<Event/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
