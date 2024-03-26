import React from "react";
import { Link } from "react-router-dom";

export default function Committees () {
   
    return(
        <div className="committees-main">
            <h1>Committees</h1>
            <div className="committee-list">
                <ul>
                    <li><Link to="/design">Design</Link></li>
                    <li><Link to="/styling">Styling</Link></li>
                    <li><Link to="/modeling">Modeling</Link></li>
                    <li><Link to="/beauty">Beauty</Link></li>
                    <li><Link to="/photography">Photography</Link></li>
                    <li><Link to="/socialmedia">Social Media</Link></li>
                    <li><Link to="/production">Production</Link></li>
                    <li><Link to="/webdesign">Web Design</Link></li>
                    <li><Link to="/zine">Zine</Link></li>
                </ul>
            </div>
        </div>
    )
}