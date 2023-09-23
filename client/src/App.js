import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicHome} from "./pages/PublicHome";
import {Home} from "./pages/Home";
import EventDetails from "./pages/EventDetails";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PublicHome/>}/>
                    <Route path={"/it-quiz"} element={<EventDetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
