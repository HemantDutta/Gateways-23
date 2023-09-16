import './Navbar.css';
import {Link} from "react-router-dom";

export const Navbar = ({active}) => {
    return (
        <>
            <section className="navbar" id="navbar">
                <section className="topBar" id="topBar">
                    <div className="topBar-content">
                        <span className="topBar-christ">CHRIST (DEEMED TO BE UNIVERSITY)</span>
                    </div>
                </section>
                <nav className="nav" id="nav">
                    <div className="nav-logo">
                        <span className="gw-name">GATEWAYS</span><span className="gw-year">2023</span>
                    </div>
                    <div className="nav-list">
                        <Link to={"/"} className={active === "home"?"active":""}>Home</Link>
                        <Link to={"/"} className={active === "events"?"active":""}>Events</Link>
                        <Link to={"/"} className={active === "about"?"active":""}>About</Link>
                    </div>
                    <div className="nav-menu">
                        <span tabIndex="0">MENU</span>
                        <div className="menu-btn" tabIndex="0">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}