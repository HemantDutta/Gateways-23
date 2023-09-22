import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicHome} from "./pages/PublicHome";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PublicHome/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
