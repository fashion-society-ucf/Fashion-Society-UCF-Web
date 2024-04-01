import React, { memo, useState } from "react";
import { Icon } from "@iconify/react";

import "./committees.css";
import data from "./data.json";

const CommitteeCard = memo(({data: { name, image, description, url }, selected, select }) => {
    return (
        <div className={`item ${selected === name ? "selected" : ""}`} onClick={select}>
            <div className="text">
                <p className="name">
                    {name}
                    <p className="description">
                   {description}
                    </p>
                </p>
            </div>
            <img src={image} alt={name} />
            <a className="link" href={url}>
                <Icon icon="akar-icons:arrow-right" />
            </a>
        </div>
    )
});

export default function Committees() {
    const [selected, setSelected] = useState("");

    document.body.style.backgroundColor = "#EDEBEB";

    const select = (name) => {
        if (selected === name) {
            setSelected("");
            return;
        }
        setSelected(name);
    };

    return (
        <div className="content">
            <div className="list-container">
                <div className="list">
                    {
                        data.map((item, index) => (
                            <CommitteeCard key={index} data={item} selected={selected} select={() => select(item.name)} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}