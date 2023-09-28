import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicHome} from "./pages/PublicHome";
import EventDetails from "./pages/EventDetails";
import {Events} from "./pages/Events";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PublicHome/>}/>
                    <Route path={"/it-quiz"} element={<EventDetails/>}/>
                    <Route path={"/events"} element={<Events/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
