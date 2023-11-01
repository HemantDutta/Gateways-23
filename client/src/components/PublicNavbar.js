import './PublicNavbar.css'
import {Link} from "react-router-dom";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const PublicNavbar = ({active}) => {

    //States
    const [sideActive, setSideActive] = useState(false);

    //Refs
    const sidebar = useRef(null);

    let prevScroll = window.scrollY;
    useEffect(() => {
        const checkScroll = () => {
            let nav = document.getElementById("navbar");
            if (window.scrollY > prevScroll) {
                nav.style.transform = "translateY(-150%)";
            }
            if (prevScroll > window.scrollY) {
                nav.style.transform = "none";
            }
            prevScroll = window.scrollY;
        }

        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        }
    }, [])

    let prevWidth = window.innerWidth;
    //Page Reload
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth !== prevWidth) {
                window.location.reload();
            }
        })

        return () => {
            window.removeEventListener("resize", () => {
                if (window.innerWidth !== prevWidth) {
                    window.location.reload();
                }
            })
        }
    }, [])

    //Toggle Sidebar
    function toggleSidebar() {
        let sidebar = document.getElementById("sidebar");
        let sideUnder = document.getElementById("sideUnder");

        if (sidebar.classList.contains("active")) {
            setSideActive(false);
            sideUnder.classList.remove("active");
            setTimeout(() => {
                sideUnder.style.display = "none";
            }, 400)
            sidebar.classList.remove("active");
        } else {
            setSideActive(true);
            sideUnder.style.display = "block";
            setTimeout(() => {
                sideUnder.classList.add("active");
            }, 100)
            sidebar.classList.add("active");
        }
    }

    //Sidebar Animation
    // useLayoutEffect(() => {
    //     gsap.from(".sideAnim", {
    //         yPercent: 200,
    //         duration: 0.4,
    //         delay: 0.2,
    //         ease: "back.in",
    //     })
    // }, [sideActive])

    return (
        <>
            <nav id="navbar">
                <div className="navbar-container">
                    <div className="navbar-underlay"/>
                    <div className="navbar-main">
                        <div className="navbar-left">
                            <div className="navbar-cu-logo">
                                <a href="https://christuniversity.in/" target="_blank" rel="noreferrer"><img src="assets/cu_white_logo.png" alt=""/></a>
                            </div>
                            <div className="navbar-social-links">
                                <a href="https://www.linkedin.com/in/gateways2022" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"/></a>
                                <a href="https://instagram.com/2023gateways" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"/></a>
                            </div>
                        </div>
                        <div className="navbar-right">
                            <ul>
                                <li className="nav-link"><Link to={"/"} className={active === "home" ? "active" : ""}>Home</Link></li>
                                {
                                    active === "home" &&
                                    <li className="nav-link"><a href="#events" className={active === "events" ? "active" : ""}>Events</a></li>
                                }
                                {
                                    active !== "home" &&
                                    <li className="nav-link"><Link to={"/"} state={true} className={active === "events" ? "active" : ""}>Events</Link></li>
                                }
                                <li className="nav-link"><Link to={"/about"} className={active === "about" ? "active" : ""}>About</Link></li>
                                <li className="nav-btn">
                                    <button type="button"><a className="broch" href="https://heyzine.com/flip-book/90b792eb10.html" rel={"noreferrer"} target={"_blank"}>View&nbsp;Brochure</a></button>
                                </li>
                                <li className="menu-btn" onClick={toggleSidebar}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/*  Sidebar  */}
            <div className="sidebar-underlay" id="sideUnder" onClick={toggleSidebar}/>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-container" ref={sidebar}>
                    <span className="close-side" onClick={toggleSidebar}><i className="fa-solid fa-xmark"/></span>
                    <div className="sidebar-link">
                        <ul>
                            <li onClick={toggleSidebar}><Link to={"/"} className="sideAnim">Home</Link></li>
                            {
                                active === "home" &&
                                <li onClick={toggleSidebar}><a href="#events" className="sideAnim">Events</a></li>
                            }
                            {
                                active !== "home" &&
                                <li onClick={toggleSidebar}><Link to={"/"} state={true} className="sideAnim">Events</Link></li>
                            }
                            <li onClick={toggleSidebar}><Link to={"/about"} className="sideAnim">About</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar-socials">
                        <a href="https://www.linkedin.com/in/gateways2022" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"/></a>
                        <a href="https://instagram.com/2023gateways" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"/></a>
                    </div>
                    <div className="sidebar-brochure">
                        <button type="button" className="sideAnim"><a href="https://heyzine.com/flip-book/7293662a40.html" target="_blank" rel="noreferrer">View Brochure</a></button>
                    </div>
                </div>
            </div>
            {/*  Sidebar End  */}
        </>
    )
}