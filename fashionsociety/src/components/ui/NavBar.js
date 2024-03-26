import React from "react";
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar () {

    return(
        <nav className="navbar">
            <div className="navbar-container">
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/committees">Committees</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <div class="animation start-home"></div>
                </ul>
            </div>
        </nav>
    )
}