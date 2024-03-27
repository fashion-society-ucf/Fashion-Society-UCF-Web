import React from "react";
import { Link } from "react-router-dom";

import "./committees.css";

export default function Committees() {
    return (
        <div className="content">
            <div className="list-container">
                <div className="list">
                    <Link className="item" to="/design">
                        <p>Design</p>
                        <img src="/committees/design.png" alt="Design" />
                    </Link>
                    <Link className="item" to="/styling">
                        <p>Styling</p>
                        <img src="/committees/styling.png" alt="Styling" />
                    </Link>
                    <Link className="item" to="/modeling">
                        <p>Modeling</p>
                        <img src="/committees/modeling.png" alt="Modeling" />
                    </Link>
                    <Link className="item" to="/beauty">
                        <p>Beauty</p>
                        <img src="/committees/beauty.png" alt="Beauty" />
                    </Link>
                    <Link className="item" to="/photography">
                        <p>Photography</p>
                        <img src="/committees/photography.png" alt="Photography" />
                    </Link>
                    <Link className="item" to="/socialmedia">
                        <p>Social Media</p>
                        <img src="/committees/socialmedia.png" alt="Social Media" />
                    </Link>
                    <Link className="item" to="/production">
                        <p>Production</p>
                        <img src="/committees/production.png" alt="Production" />
                    </Link>
                    <Link className="item" to="/webdesign">
                        <p>Web Design</p>
                        <img src="/committees/webdesign.webp" alt="Web Design" />
                    </Link>
                    <Link className="item" to="/zine">
                        <p>Zine</p>
                        <img src="/committees/zine.png" alt="Zine" />
                    </Link>
                </div>
            </div>
        </div>
    )
}