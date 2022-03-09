import React from "react"
import Star from "./stars-bg.jpg"

export default function Nav(props){    
    
    let navTabElements = props.pages.map( page => React.createElement("li", {}, page))

    const navStyle = {
        backgroundImage: `url(${Star})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    return(
        <nav style={navStyle}>
            <div className="container">
                <div className="logo-container">
                    <p className="logo-t1">Star</p>
                    <p className="logo-t2">The Guessing Game</p>
                    <p className="logo-t1">Wars</p>
                </div>
                <ul>
                    <li>
                        <a className="logo-t1" href="">
                            {props.pages[0]}
                        </a>
                    </li>
                    <li>
                        <a className="logo-t1" href="">
                            {props.pages[1]}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}