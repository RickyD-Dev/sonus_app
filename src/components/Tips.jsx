import React from "react";

function Tips(props) {
    return (
        <div className="tips-container">
            <div className="tips-innerPopUp">
                <h4>Welcome to Sonus!</h4>
                <p>Tap on a string or a note to begin tuning by ear.</p>
                <p>To loop a string, tap on the Loop button first, then tap on a string to begin the looping sequence.</p>
                <p><a className="tips-email" href="mailto:rickydlgd.dev@gmail.com" title="Ricky's Email: rickydlgd.dev@gmail.com">Let me know how you like it!</a></p>
                <p>Thanks for stopping by!</p>
                <div className="tips-button-container">
                    <button onClick={props.onClick}>Dismiss</button>
                </div>
            </div>
        </div>
    )
}

export default Tips;