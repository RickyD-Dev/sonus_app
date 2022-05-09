import React from "react";

function TuningSelection(props) {
    return(
        <ul key={props.id} className={props.className}>
            <li><button id={props.tuneID1} className={props.firstStringChosen === true ? "notes--active" : "notes"} onClick={props.onClick}>{props.tuning[0]}</button></li>
            <li><button id={props.tuneID2} className={props.secondStringChosen === true ? "notes--active" : "notes"} onClick={props.onClick}>{props.tuning[1]}</button></li>
            <li><button id={props.tuneID3} className={props.thirdStringChosen === true ? "notes--active" : "notes"} onClick={props.onClick}>{props.tuning[2]}</button></li>
            <li><button id={props.tuneID4} className={props.fourthStringChosen === true ? "notes--active" : "notes"} onClick={props.onClick}>{props.tuning[3]}</button></li>
            <li><button id={props.tuneID5} className={props.fifthStringChosen === true ? "notes--active" : "notes"} onClick={props.onClick}>{props.tuning[4]}</button></li>
            <li><button id={props.tuneID6} className={props.sixthStringChosen === true ? "notes--active" : "notes"} onClick={props.onClick}>{props.tuning[5]}</button></li>
        </ul>
    )
}

export default TuningSelection;