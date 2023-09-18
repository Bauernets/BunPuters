import React from "react";
import "./button.css";
export default function Button(props) {
    return (
        <div className="container">
            
            <button className="button" onClick={props.onClick}>{props.text}</button>
        </div>
    );
}