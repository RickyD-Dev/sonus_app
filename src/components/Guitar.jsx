import React from "react";

function Guitar(props) {

    return(
        <div className="guitar-container">
            <svg width="100%" height="100%" viewBox="0 0 185 556" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Guitar Neck">
                    <g id="Neck" filter="url(#filter0_dd_101_15)">
                        <rect x="17" y="15" width="151" height="526" rx="10" fill="#371A00" fillOpacity="0.84" shapeRendering="auto"/>
                        <rect x="17.5" y="15.5" width="150" height="525" rx="9.5" stroke="#989898" strokeOpacity="0.8" shapeRendering="auto"/>
                    </g>
                <circle id="Ellipse 1" cx="92.5" cy="278.5" r="9" fill="#D5D5D5" stroke="#585858"/>
                    <g id="Frets">
                        <line id="Fret 2" x1="17" y1="367.5" x2="168" y2="367.5" stroke="#FBFBFB" strokeOpacity="0.7"/>
                        <line id="Fret 1" x1="17" y1="187.5" x2="168" y2="187.5" stroke="#FBFBFB" strokeOpacity="0.7"/>
                    </g>
                    <g id="Strings">
                        <line id="Low E" x1="31" y1="16" x2="31" y2="541" stroke="#B67800" strokeWidth="4" className={props.firstStringChosen === true ? "string1-active" : "string1"}/>
                        <line id="A" x1="55.5" y1="16" x2="55.5" y2="541" stroke="#D7A037" strokeWidth="3.5" className={props.secondStringChosen === true ? "string2-active" : "string2"}/>
                        <line id="D" x1="80.25" y1="16" x2="80.25" y2="541" stroke="#D7B574" strokeWidth="3" className={props.thirdStringChosen === true ? "string3-active" : "string3"}/>
                        <line id="G" x1="105" y1="16" x2="105" y2="541" stroke="#CFBB94" strokeWidth="2.5" className={props.fourthStringChosen === true ? "string4-active" : "string4"}/>
                        <line id="B" x1="129.75" y1="16" x2="129.75" y2="541" stroke="#CDC5B5" strokeWidth="2" className={props.fifthStringChosen === true ? "string5-active" : "string5"}/>
                        <line id="High E" x1="154.5" y1="16" x2="154.5" y2="541" stroke="#D9D9D9" strokeWidth="1.5" className={props.sixthStringChosen === true ? "string6-active" : "string6"}/>

                        <line id={props.tuneID1} onClick={props.onClick} x1="31" y1="16" x2="31" y2="541" stroke="transparent" strokeWidth="20" cursor="pointer"/>
                        <line id={props.tuneID2} onClick={props.onClick} x1="55.5" y1="16" x2="55.5" y2="541" stroke="transparent" strokeWidth="20" cursor="pointer"/>
                        <line id={props.tuneID3} onClick={props.onClick} x1="80.25" y1="16" x2="80.25" y2="541" stroke="transparent" strokeWidth="20" cursor="pointer"/>
                        <line id={props.tuneID4} onClick={props.onClick} x1="105" y1="16" x2="105" y2="541" stroke="transparent" strokeWidth="20" cursor="pointer"/>
                        <line id={props.tuneID5} onClick={props.onClick} x1="129.75" y1="16" x2="129.75" y2="541" stroke="transparent" strokeWidth="20" cursor="pointer"/>
                        <line id={props.tuneID6} onClick={props.onClick} x1="154.5" y1="16" x2="154.5" y2="541" stroke="transparent" strokeWidth="20" cursor="pointer"/>
                    </g>
                </g>
                <defs>
                    <filter id="filter0_dd_101_15" x="0" y="0" width="185" height="556" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_101_15"/>
                    <feOffset dx="-4" dy="2"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.104167 0 0 0 0 0.104167 0 0 0 0 0.104167 0 0 0 0.58 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_15"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_101_15"/>
                    <feOffset dx="4" dy="-2"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_101_15" result="effect2_dropShadow_101_15"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_101_15" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Guitar;