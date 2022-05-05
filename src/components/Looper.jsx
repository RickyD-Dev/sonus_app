import React from "react";

function Looper(props) {
    return(
        <div className="looper-container">
            <label className="loop-label" htmlFor="loop-button">
                <span className="loop-title" title="Loop Button">Loop</span>
            </label>
            <input onClick={props.onClick} type="checkbox" id="loop-button" name="loop-button" checked={props.checked} readOnly></input>
        </div>
    )
}

export default Looper;