import React from "react";

function TuningSelection(props) {
    return(
        <ul key={props.id} className={props.className}>
            <li id="0" className={props.firstStringChosen == true ? "notes--active" : "notes"}>{props.tuning[0]}</li>
            <li id="1" className={props.secondStringChosen == true ? "notes--active" : "notes"}>{props.tuning[1]}</li>
            <li id="2" className={props.thirdStringChosen == true ? "notes--active" : "notes"}>{props.tuning[2]}</li>
            <li id="3" className={props.fourthStringChosen == true ? "notes--active" : "notes"}>{props.tuning[3]}</li>
            <li id="4" className={props.fifthStringChosen == true ? "notes--active" : "notes"}>{props.tuning[4]}</li>
            <li id="5" className={props.sixthStringChosen == true ? "notes--active" : "notes"}>{props.tuning[5]}</li>
        </ul>
    )
}

export default TuningSelection;