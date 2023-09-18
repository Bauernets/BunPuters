import React from "react";

export default function Button(props) {
    return (
        <div>
            <style></style>
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    );
}