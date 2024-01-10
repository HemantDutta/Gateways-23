import {useEffect, useRef} from "react";

export const Navbar = () => {

    //Refs
    const list = useRef(null);

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
    }, []);

    //Close BigMenu on Resize
    useEffect(() => {
        const closeBigMenu = () => {
            if (window.innerWidth > 991) {
                let bigMenu = document.getElementById("bigMenu");
                let ham = document.getElementById("ham");
                bigMenu.classList.remove("active");
                ham.classList.remove("active");
            }
        }

        window.addEventListener("resize", closeBigMenu);

        return () => {
            window.removeEventListener("resize", closeBigMenu);
        }
    }, [])

    //Big Menu Toggle
    function bigMenuToggle() {
        //Big Menu Vars
        let bigMenu = document.getElementById("bigMenu");
        let ham = document.getElementById("ham");

        if (!bigMenu.classList.contains("active")) {
            list.current.style.display = "flex";
            setTimeout(()=>{
                bigMenu.classList.add("active");
                ham.classList.add("active");
            },0)
        } else {
            bigMenu.classList.remove("active");
            ham.classList.remove("active");
            setTimeout(()=>{
                list.current.style.display = "none";
            },400)
        }
    }

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
                    <div className="ham" id="ham" onClick={bigMenuToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="big-menu" id="bigMenu">
                    <div className="list container" ref={list}>
                        <a className="bigAnim" href="#flash" onClick={bigMenuToggle}>Flash Mob <span/></a>
                        <a className="bigAnim" href="#ing" onClick={bigMenuToggle}>Inauguration <span/></a>
                        <a className="bigAnim" href="#eve" onClick={bigMenuToggle}>Events <span/></a>
                        <a className="bigAnim" href="#val" onClick={bigMenuToggle}>Valedictory <span/></a>
                    </div>
                </div>
            </nav>
        </>
    )
}