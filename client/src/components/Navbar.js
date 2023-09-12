import './Navbar.css';
import {Link} from "react-router-dom";

export const Navbar = () => {
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
                        <Link>Home</Link>
                        <Link>Events</Link>
                        <Link>About</Link>
                    </div>
                    <div className="nav-menu">
                        <div className="menu-btn">
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