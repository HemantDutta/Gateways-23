import './PreLoader.css'
import {ProgressBar} from "./ProgressBar";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export const PreLoader = ({preHandler}) => {

    //First Render
    const firstRender = useRef(true);

    //Refs and States
    const preLoader = useRef(null);
    const text = useRef(null);
    const [finish, setFinish] = useState(false);

    //Progress Bar Handler
    function handler() {
        setTimeout(() => {
            setFinish(true);
            firstRender.current = false;
        }, 400)
    }

    //Text Effect Handler
    useEffect(() => {
        if (firstRender.current) {
            const textEffect = () => {
                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

                let interval = null;

                let text = document.getElementById("loader-text");

                let iteration = 0;

                clearInterval(interval);

                interval = setInterval(() => {
                    text.innerText = text.innerText.split("").map((letter, index) => {
                        if (index < iteration) {
                            return text.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 26)]
                    }).join("");

                    if (iteration >= text.dataset.value.length) {
                        clearInterval(interval);
                    }

                    iteration += 1 / 3;
                }, 60)
            }
            textEffect()
        }
    }, [])

    useEffect(() => {
        if (!firstRender.current) {
            const tl = gsap.timeline();

            tl
                .to(text.current, {
                    autoAlpha: 0,
                    duration: 0.5
                }, 0)
                .to(preLoader.current, {
                    duration: 0.5,
                    height: "0vh",
                    ease: "power3.out",
                    onComplete: preHandler()
                }, 0)
        }
    }, [finish])

    return (
        <>
            <div className="preloader" ref={preLoader}>
                <div className="text">
                    <span ref={text} id="loader-text" data-value="GATEWAYS 2023">GATEWAYS 2023</span>
                </div>
                <ProgressBar handler={handler}/>
            </div>
        </>
    )
}