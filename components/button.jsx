import React from "react";

export default function Button(props) {

    return (
        <div className="container">
            
            <button className="button" onClick={props.onClick}>{props.text}</button>
        </div>
    );
}