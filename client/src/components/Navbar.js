import {useEffect} from "react";

export const Navbar = () => {

    //Scroll to top
    function scrollTop() {
        window.scrollTo(0, 0);
    }

    //Scroll Y for hideNav method
    let scrollY = window.scrollY;

    //Navbar Scroll Methods
    useEffect(() => {
        const hideNav = () => {
            let nav = document.getElementById("nav");
            let logo = document.getElementById("logo");
            console.log(scrollY);
            if (window.scrollY > scrollY) {
                nav.classList.add("hide");
            } else {
                nav.classList.remove("hide");
            }

            if (window.scrollY < 100) {
                logo.classList.add("hide");
            } else {
                logo.classList.remove("hide");
            }

            scrollY = window.scrollY;
        }

        window.addEventListener("scroll", hideNav);

        return () => {
            window.removeEventListener("scroll", hideNav);
        }
    }, [])

    return (
        <>
            <nav id="nav">
                <div className="navbar-container">
                    <div className="left">
                        <img src="assets/gw_dark.png" alt="Gateways 2023" onClick={scrollTop}/>
                        <span id="logo" className="logo" onClick={scrollTop}>GATEWAYS</span>
                    </div>
                    <div className="right">
                        <a href="#flash">Flash Mob</a>
                        <a href="#ing">Inauguration</a>
                        <a href="#eve">Events</a>
                        <a href="#val">Valedictory</a>
                    </div>
                    <div className="ham">
                        <i className="fa-solid fa-bars"/>
                    </div>
                </div>
            </nav>
        </>
    )
}