import {useEffect, useState} from "react";
import './ProgressBar.css'

export const ProgressBar = ({handler}) => {

    //States
    const [filled, setFilled] = useState(0);

    //Handler
    useEffect(() => {
        if(filled<100){
            setTimeout(()=>{setFilled(prevState => prevState +=2)},50)
        }
        else{
            document.getElementById("loading-stat").innerText = "Loading Complete!"
            document.getElementById("loading-stat2").innerText = "Loading Complete!"
            setTimeout(()=>{
                handler(true)
            },200)
        }
    }, [filled])

    return (
        <>
            <div className="progress-bar">
                <div className="progress-bar-outer">
                    <div className="progress-bar-inner">
                        <div className="progress-bar-meter"
                             style={{
                                 width: `${filled}%`,
                                 transition: "width 0.2s"
                             }}
                        />
                        <span id="loading-stat">Loading&nbsp;{filled}%</span>
                    </div>
                </div>
                <span id="loading-stat2">Loading&nbsp;{filled}%</span>
            </div>
        </>
    )
}