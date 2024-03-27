import React from "react";
import { Link, useLocation } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    const location = useLocation();

    console.log(location.pathname);

    return (
        <nav>
            <div className="links">
                <Link className={location.pathname === "/" ? "current" : ""} to="/">Home</Link>
                <Link className={location.pathname.startsWith("/about") ? "current" : ""} to="/about">About</Link>
                <Link className={location.pathname.startsWith("/committees") ? "current" : ""} to="/committees">Committees</Link>
                <Link className={location.pathname.startsWith("/events") ? "current" : ""} to="/events">Events</Link>
                <div className="animation start-home"></div>
            </div>
        </nav>
    )
}