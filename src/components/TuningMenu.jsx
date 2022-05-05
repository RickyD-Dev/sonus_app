import React from "react";

function TuningMenu(props) {
    return(
        <div className={props.isToggled == true ? "tuning-menu-section--open" : "tuning-menu-section--closed"}>
            <nav className={props.isToggled == true ? "tuning-menu-nav--open" : "tuning-menu-nav--closed"}>
                <div onClick={props.toggleNav} className={props.isToggled == true ? "title-navButton-container--open" : "title-navButton-container--closed"}>
                    <h3 className="tuning-menu-title" title={props.selectedTuning}>{props.selectedTuning}</h3>
                    <svg className="tuning-menu-icon" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 13.0048C20 13.5544 19.5544 14 19.0048 14H10.9952C10.4456 14 10 13.5544 10 13.0048C10 12.4552 10.4456 12.0096 10.9952 12.0096H19.0048C19.5544 12.0096 20 12.4552 20 13.0048Z" fill="white"/>
                        <path d="M20 7.00024C20 7.54987 19.5544 7.99544 19.0048 7.99544H0.995193C0.445564 7.99544 0 7.54987 0 7.00024C0 6.45061 0.445562 6.00505 0.995193 6.00505H19.0048C19.5544 6.00505 20 6.45061 20 7.00024Z" fill="white"/>
                        <path d="M19.0048 1.99039C19.5544 1.99039 20 1.54482 20 0.995193C20 0.445562 19.5544 0 19.0048 0H6.99519C6.44556 0 6 0.445562 6 0.995193C6 1.54482 6.44556 1.99039 6.99519 1.99039H19.0048Z" fill="white"/>
                    </svg>
                </div>
                
                <ul className={props.isToggled == true ? "tuning-menu--open" : "tuning-menu--closed"}>
                    <li className="nav-item"><a id="0" href="#" title="Standard Tuning" onClick={props.targetToggle}>Standard Tuning <span className="tuning-span">{props.tuning1}</span></a></li>
                    <hr/>
                    <li className="nav-item"><a id="1" href="#" title="Drop D" onClick={props.targetToggle}>Drop D <span className="tuning-span">{props.tuning2}</span></a></li>
                    <hr/>
                    <li className="nav-item"><a id="2" href="#" title="Drop C" onClick={props.targetToggle}>Drop C <span className="tuning-span">{props.tuning3}</span></a></li>
                    <hr/>
                    <li className="nav-item"><a id="3" href="#" title="DADGAD" onClick={props.targetToggle}>DADGAD <span className="tuning-span">{props.tuning4}</span></a></li>
                    <hr/>
                </ul>
            </nav>
        </div>
    )
}

export default TuningMenu;