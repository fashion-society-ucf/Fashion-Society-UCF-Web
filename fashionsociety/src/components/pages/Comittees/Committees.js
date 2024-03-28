import React, { memo, useState } from "react";
import { useNavigate } from 'react-router-dom'; 

import "./committees.css";

const CommitteeCard = memo(({ name, image, selected, select }) => {
    return (
        <div className={`item ${selected === name ? "selected" : ""}`} onClick={select}>
            <div className="text">
                <p className="name">
                    {name}
                    <p className="description">
                        Design is a committee made for UCF’s best fashion designers and aspirational beginners alike. Whether it’s through sewing, knitting, crocheting, or upcycling, this committee is perfect for creative individuals who want to develop their talents and help design outfits for our spring runway show! Open to all skill levels, we are here to help students explore and learn fashion design, as well as hone in on their craft to fabricate runway-ready looks.
                    </p>
                </p>
            </div>
            <img src={image} alt={name} />
        </div>
    )
});

export default function Committees() {
    const [selected, setSelected] = useState("");
    const navigate = useNavigate(); // initialize nav function

    const select = (name) => {
        if (selected === name) {
            setSelected("");
            if(name === 'Social Media') {
                navigate('/social-media');
            }
            return;
        }
        else {
            setSelected(name);
        }
    };

    return (
        <div className="content">
            <div className="list-container">
                <div className="list">
                    <CommitteeCard name="Design" image="/committees/design.png" selected={selected} select={() => select("Design")} />
                    <CommitteeCard name="Styling" image="/committees/styling.png" selected={selected} select={() => select("Styling")} />
                    <CommitteeCard name="Modeling" image="/committees/modeling.png" selected={selected} select={() => select("Modeling")} />
                    <CommitteeCard name="Beauty" image="/committees/beauty.png" selected={selected} select={() => select("Beauty")} />
                    <CommitteeCard name="Photography" image="/committees/photography.png" selected={selected} select={() => select("Photography")} />
                    <CommitteeCard name="Social Media" image="/committees/socialmedia.png" selected={selected} select={() => select("Social Media")} />
                    <CommitteeCard name="Production" image="/committees/production.png" selected={selected} select={() => select("Production")} />
                    <CommitteeCard name="Web Design" image="/committees/webdesign.png" selected={selected} select={() => select("Web Design")} />
                    <CommitteeCard name="Zine" image="/committees/zine.png" selected={selected} select={() => select("Zine")} />
                </div>
            </div>
        </div>
    )
}