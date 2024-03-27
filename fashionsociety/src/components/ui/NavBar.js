import React from "react";
import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    const location = useLocation();

    console.log(location.pathname);

    return (
        <nav>
            <div className="navbar">
                <div className="links">
                    <ul>
                        <li className={location.pathname === "/" ? "current" : ""}><Link to="/">Home</Link></li>
                        <li className={location.pathname === "/about" ? "current" : ""}><Link to="/about">About</Link></li>
                        <li className={location.pathname === "/committees" ? "current" : ""}><Link to="/committees">Committees</Link></li>
                        <li className={location.pathname === "/events" ? "current" : ""}><Link to="/events">Events</Link></li>
                        <div className="animation start-home"></div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}