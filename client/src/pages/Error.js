import {PublicNavbar} from "../components/PublicNavbar";
import {Footer} from "../components/Footer";
import './Error.css';

export const Error = () => {
    return (
        <>
            {/*Header*/}
            <PublicNavbar/>
            {/*Header End*/}
            <div className="error">
                <div className="error-container">

                </div>
            </div>
            {/*  Footer  */}
            <Footer active="home"/>
            {/*  Footer End  */}
        </>
    )
}