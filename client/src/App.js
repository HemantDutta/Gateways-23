import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import EventDetails from "./pages/EventDetails";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
                <Routes>
                    <Route path={"/event/quiz"} element={<EventDetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
