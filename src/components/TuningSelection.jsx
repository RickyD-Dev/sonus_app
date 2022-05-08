import React from "react";

function TuningSelection(props) {
    return(
        <ul key={props.id} className={props.className}>
            <li id={props.tuneID1} onClick={props.onClick} className={props.firstStringChosen === true ? "notes--active" : "notes"}>{props.tuning[0]}</li>
            <li id={props.tuneID2} onClick={props.onClick} className={props.secondStringChosen === true ? "notes--active" : "notes"}>{props.tuning[1]}</li>
            <li id={props.tuneID3} onClick={props.onClick} className={props.thirdStringChosen === true ? "notes--active" : "notes"}>{props.tuning[2]}</li>
            <li id={props.tuneID4} onClick={props.onClick} className={props.fourthStringChosen === true ? "notes--active" : "notes"}>{props.tuning[3]}</li>
            <li id={props.tuneID5} onClick={props.onClick} className={props.fifthStringChosen === true ? "notes--active" : "notes"}>{props.tuning[4]}</li>
            <li id={props.tuneID6} onClick={props.onClick} className={props.sixthStringChosen === true ? "notes--active" : "notes"}>{props.tuning[5]}</li>
        </ul>
    )
}

export default TuningSelection;