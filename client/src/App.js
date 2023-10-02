import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicHome} from "./pages/PublicHome";
import EventDetails from "./pages/EventDetails";
import {Events} from "./pages/Events";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PublicHome/>}/>
                    <Route path={"/it-quiz"} element={<EventDetails/>}/>
                    <Route path={"/events"} element={<Events/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
