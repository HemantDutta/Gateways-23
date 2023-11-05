import './Footer.css';
import {Link} from "react-router-dom";

export const Footer = ({active}) => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="logo-item">
                            <img src="assets/gw_white_trans.png" alt="Code Cosmos"/>
                            <span>CODE COSMOS</span>
                        </div>
                        <div className="logo-item">
                            <img src="assets/cu_white_logo.png" alt="Christ University"/>
                        </div>
                    </div>
                    <div className="footer-right">
                        <ul>
                            <li className="nav-link"><Link to={"/"} className={active==="home"?"active":""}>Home</Link></li>
                            {
                                active === "home" &&
                                <li className="nav-link"><a href="#events" className={active==="events"?"active":""}>Events</a></li>
                            }
                            {
                                active !== "home" &&
                                <li className="nav-link"><Link to={"/"} state={true} className={active==="events"?"active":""}>Events</Link></li>
                            }
                            <li className="nav-link"><Link to={"/about"} className={active==="about"?"active":""}>About</Link></li>
                            <li className="nav-btn">
                                <button type="button"><a href="https://drive.google.com/file/d/1raWKyBgHjIoMVKT1HieozQhjdGfdejkG/view?usp=sharing" target="_blank" rel="noreferrer">Brochure&nbsp;<i className="fa-solid fa-download"/></a></button>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <span>&copy;&nbsp;Gateways 2023</span>
                        <span>+91 9741311744</span>
                        <span>gateways@cs.christuniversity.in</span>
                    </div>
                    <div className="dev-name">
                        <span>Developed by:</span>
                        <a href="https://www.linkedin.com/in/hemantduttahd/" target="_blank" rel="noreferrer">Hemant Dutta</a>
                        <a href="https://github.com/HemantDutta" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"/></a>
                    </div>
                </div>
            </footer>
        </>
    )
}