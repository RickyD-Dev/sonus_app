import React, { useEffect, useState, useRef } from "react";
import selection from "./selection";
import { createStandard, createDropD, createDropC, createDADGAD } from "./createSound";
import Guitar from "./Guitar";
import Looper from "./Looper";
import TuningMenu from "./TuningMenu";
import TuningSelection from "./TuningSelection";
import Tips from "./Tips";
import { Howler } from "howler";

function Main() {

    // State of the currently selected tuning which is pulled from the "selection" object. Default is "Standard Tuning":
    const [currentlySelected, setCurrentlySelected] = useState(selection[0]);
    // State of nav menu being opened or closed:
    const [isToggled, setToggle] = useState(false);
    // State of which array is currently being used:
    const [tuningName, setTuningName] = useState(currentlySelected.name);
    // State of which string ID keys are being used:
    const [stringKey, setStringKeys] = useState(currentlySelected.tuningNotes);
    // State for Checked Box:
    const [checked, setChecked] = useState(false);
    // State for Pop Up. This should only come up for first time visitors:
    const [visible, setVisible] = useState(false);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function changeStringStatus(stringRef) { // Takes one parameter, which in this case would be any of the string useRefs (stringOne, stringTwo, etc). It delays changing the ref to opposite of it's current ref.
        await sleep(500);
        stringRef.current = !stringRef.current;
    }

    function stringChangeNow(stringRef) { // Takes one parameter, which in this case would be any of the string useRefs (stringOne, stringTwo, etc). This changes the ref to false immediately.
        stringRef.current = false;
    }

    // This loop function will set the loop to the opposite of its current state (false). When clicked it will become true. It will also uncheck the box using the checked state, it will change the string refs to false (which stops the sound) after 0.5s and then immediately change back to true (in order to allow them to play again):
    let looped = useRef(false);
    const handleLoopAction = () => {
        looped.current = !looped.current;
        setChecked(!checked);
        changeStringStatus(stringOne);
        changeStringStatus(stringTwo);
        changeStringStatus(stringThree);
        changeStringStatus(stringFour);
        changeStringStatus(stringFive);
        changeStringStatus(stringSix);
        setFirstString(false);
        setSecondString(false);
        setThirdString(false);
        setFourthString(false);
        setFifthString(false);
        setSixthString(false);
        stringChangeNow(stringOne);
        stringChangeNow(stringTwo);
        stringChangeNow(stringThree);
        stringChangeNow(stringFour);
        stringChangeNow(stringFive);
        stringChangeNow(stringSix);
    }

    // This function handles the logic for each string.
    // --- It takes 3 parameters: 
    // 1. The actual sound (example: standardLowE),
    // 2. The loop ref to see if true/false (example: looped),
    // 3. The setString function to change the state of the const responsible for letting the string light up or not (example: setFirstString),
    // 4. The string parameter is tied to the string refs (stringOne, stringTwo, etc.)
    // --- When executed:
    // Allows the sound to play first and logs that it is indeed playing in the console.
    // Once the sound reaches the end, it will log that it is finished and then it'll decided what to do depending on whether the Loop button is ON (looped.current set to true) or OFF (looped.current set to false).
    // If Loop button is ON, it will allow the sound to play over & over. It will check if Loop is still ON after the sound reaches the end once again.
    // If Loop button is turned OFF during a loop sequence, it will stop the current sound playing entirely. Then strings can be played as normal.
    function handleStringOptions(sound, loopRef, setFunc, string) {

        function isPlaying() {
        //     --Below works great to fire a function while sound is playing--    
            if (sound.playing()) {
                if (string.current === false) {
                    sound.stop();
                }
                setTimeout(isPlaying, 200);
            }
        }

        sound.on("play", () => {
            isPlaying();
            console.log(sound.state());
        });

        sound.on("end", () => {
            setFunc(false);
            console.log("Finished playing.");
            console.log(sound.state());
            if (loopRef.current === true) {
                sound.on("play", () => {
                    setFunc(true);
                });
                if (!sound.playing()){
                    sound.play();
                }
            }
        });

        sound.play();

        // if (Howler.ctx.state === "suspended") {
        //     console.log(Howler.ctx.state);
        //     test();
        //     Howler.ctx.resume().then(() => {
        //         console.log(Howler.ctx.state);
        //         sound.play();
        //     });
        // }

        // if (Howler.ctx.state === "running") {
        //     console.log(Howler.ctx.state);
        //     sound.play();
        // }
    }

    function checkTheSound() {
        console.log(createStandard[0]);
    }

    // When true, the sounds are allowed to play. When false, the sound stops.
    const stringOne = useRef(true);
    const stringTwo = useRef(true);
    const stringThree = useRef(true);
    const stringFour = useRef(true);
    const stringFive = useRef(true);
    const stringSix = useRef(true);

    // Depending on the tuning that is currently selected (which will be checked by the switch statement), this function will execute commands depending on which string was clicked/tapped. It handles a set of commands for when the Loop is on and another set for when the Loop is off.
    function handleCurrentSound(param) {
        switch (tuningName) {

            case "Standard Tuning":

                // For when loop mechanic is ON:
                if (param === "Low E" && looped.current === true) {
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFirstString(true);

                    createStandard[1].stop();
                    createStandard[2].stop();
                    createStandard[3].stop();
                    createStandard[4].stop();
                    createStandard[5].stop();

                    stringTwo.current = false;
                    stringThree.current = false;
                    stringFour.current = false;
                    stringFive.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringTwo);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringFive);
                    changeStringStatus(stringSix);

                    updateHowlerCtx();
                    handleStringOptions(createStandard[0], looped, setFirstString, stringOne);

                } else if (param === "A" && looped.current === true) {
                    setFirstString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setSecondString(true);

                    createStandard[0].stop();
                    createStandard[2].stop();
                    createStandard[3].stop();
                    createStandard[4].stop();
                    createStandard[5].stop();

                    stringOne.current = false;
                    stringThree.current = false;
                    stringFour.current = false;
                    stringFive.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringFive);
                    changeStringStatus(stringSix);

                    handleStringOptions(createStandard[1], looped, setSecondString, stringTwo);

                } else if (param === "D" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setThirdString(true);

                    createStandard[0].stop();
                    createStandard[1].stop();
                    createStandard[3].stop();
                    createStandard[4].stop();
                    createStandard[5].stop();

                    stringOne.current = false;
                    stringTwo.current = false;
                    stringFour.current = false;
                    stringFive.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringTwo);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringFive);
                    changeStringStatus(stringSix);

                    handleStringOptions(createStandard[2], looped, setThirdString, stringThree);

                } else if (param === "G" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFourthString(true);

                    createStandard[0].stop();
                    createStandard[1].stop();
                    createStandard[2].stop();
                    createStandard[4].stop();
                    createStandard[5].stop();

                    stringOne.current = false;
                    stringTwo.current = false;
                    stringThree.current = false;
                    stringFive.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringTwo);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFive);
                    changeStringStatus(stringSix);

                    handleStringOptions(createStandard[3], looped, setFourthString, stringFour);

                } else if (param === "B" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setSixthString(false);
                    setFifthString(true);

                    createStandard[0].stop();
                    createStandard[1].stop();
                    createStandard[2].stop();
                    createStandard[3].stop();
                    createStandard[5].stop();

                    stringOne.current = false;
                    stringTwo.current = false;
                    stringThree.current = false;
                    stringFour.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringTwo);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringSix);

                    handleStringOptions(createStandard[4], looped, setFifthString, stringFive);

                } else if (param === "High E" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(true);

                    createStandard[0].stop();
                    createStandard[1].stop();
                    createStandard[2].stop();
                    createStandard[3].stop();
                    createStandard[4].stop();

                    stringOne.current = false;
                    stringTwo.current = false;
                    stringThree.current = false;
                    stringFour.current = false;
                    stringFive.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringTwo);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringFive);

                    handleStringOptions(createStandard[5], looped, setSixthString, stringSix);

                // For when loop mechanic is OFF:
                } else if (param === "Low E" && looped.current === false) {
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFirstString(true);

                    handleStringOptions(createStandard[0], looped, setFirstString, stringOne);
                } else if (param === "A" && looped.current === false) {
                    setFirstString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setSecondString(true);

                    handleStringOptions(createStandard[1], looped, setSecondString, stringTwo);
                } else if (param === "D" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setThirdString(true);

                    handleStringOptions(createStandard[2], looped, setThirdString, stringThree);
                } else if (param === "G" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFourthString(true);

                    handleStringOptions(createStandard[3], looped, setFourthString, stringFour);
                } else if (param === "B" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setSixthString(false);
                    setFifthString(true);

                    handleStringOptions(createStandard[4], looped, setFifthString, stringFive);
                } else if (param === "High E" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(true);

                    handleStringOptions(createStandard[5], looped, setSixthString, stringSix);
                }
                return ;

                case "Drop D":

                    // For when loop mechanic is ON:
                    if (param === "Low D" && looped.current === true) {
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFirstString(true);

                        createDropD[1].stop();
                        createDropD[2].stop();
                        createDropD[3].stop();
                        createDropD[4].stop();
                        createDropD[5].stop();
    
                        stringTwo.current = false;
                        stringThree.current = false;
                        stringFour.current = false;
                        stringFive.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringFive);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDropD[0], looped, setFirstString, stringOne);
                    } else if (param === "A" && looped.current === true) {
                        setFirstString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setSecondString(true);
    
                        createDropD[0].stop();
                        createDropD[2].stop();
                        createDropD[3].stop();
                        createDropD[4].stop();
                        createDropD[5].stop();
    
                        stringOne.current = false;
                        stringThree.current = false;
                        stringFour.current = false;
                        stringFive.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringFive);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDropD[1], looped, setSecondString, stringTwo);
                    } else if (param === "D" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setThirdString(true);
    
                        createDropD[0].stop();
                        createDropD[1].stop();
                        createDropD[3].stop();
                        createDropD[4].stop();
                        createDropD[5].stop();
    
                        stringOne.current = false;
                        stringTwo.current = false;
                        stringFour.current = false;
                        stringFive.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringFive);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDropD[2], looped, setThirdString, stringThree);
    
                    } else if (param === "G" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFourthString(true);
    
                        createDropD[0].stop();
                        createDropD[1].stop();
                        createDropD[2].stop();
                        createDropD[4].stop();
                        createDropD[5].stop();
    
                        stringOne.current = false;
                        stringTwo.current = false;
                        stringThree.current = false;
                        stringFive.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFive);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDropD[3], looped, setFourthString, stringFour);
    
                    } else if (param === "B" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setSixthString(false);
                        setFifthString(true);
    
                        createDropD[0].stop();
                        createDropD[1].stop();
                        createDropD[2].stop();
                        createDropD[3].stop();
                        createDropD[5].stop();
    
                        stringOne.current = false;
                        stringTwo.current = false;
                        stringThree.current = false;
                        stringFour.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDropD[4], looped, setFifthString, stringFive);
    
                    } else if (param === "High E" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(true);
    
                        createDropD[0].stop();
                        createDropD[1].stop();
                        createDropD[2].stop();
                        createDropD[3].stop();
                        createDropD[4].stop();
    
                        stringOne.current = false;
                        stringTwo.current = false;
                        stringThree.current = false;
                        stringFour.current = false;
                        stringFive.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringFive);
    
                        handleStringOptions(createDropD[5], looped, setSixthString, stringSix);

                    // For when loop mechanic is OFF:
                    } else if (param === "Low D" && looped.current === false) {
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFirstString(true);
    
                        handleStringOptions(createDropD[0], looped, setFirstString, stringOne);
                    } else if (param === "A" && looped.current === false) {
                        setFirstString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setSecondString(true);
    
                        handleStringOptions(createDropD[1], looped, setSecondString, stringTwo);
                    } else if (param === "D" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setThirdString(true);
    
                        handleStringOptions(createDropD[2], looped, setThirdString, stringThree);
                    } else if (param === "G" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFourthString(true);
    
                        handleStringOptions(createDropD[3], looped, setFourthString, stringFour);
                    } else if (param === "B" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setSixthString(false);
                        setFifthString(true);
    
                        handleStringOptions(createDropD[4], looped, setFifthString, stringFive);
                    } else if (param === "High E" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(true);
    
                        handleStringOptions(createDropD[5], looped, setSixthString, stringSix);
                    }
                    return ;

            case "Drop C":

                // For when loop mechanic is ON:
                if (param === "Low C" && looped.current === true) {
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFirstString(true);

                    createDropC[1].stop();
                    createDropC[2].stop();
                    createDropC[3].stop();
                    createDropC[4].stop();
                    createDropC[5].stop();

                    stringTwo.current = false;
                    stringThree.current = false;
                    stringFour.current = false;
                    stringFive.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringTwo);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringFive);
                    changeStringStatus(stringSix);

                    handleStringOptions(createDropC[0], looped, setFirstString, stringOne);

                } else if (param === "G" && looped.current === true) {
                    setFirstString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setSecondString(true);

                    createDropC[0].stop();
                    createDropC[2].stop();
                    createDropC[3].stop();
                    createDropC[4].stop();
                    createDropC[5].stop();

                    stringOne.current = false;
                    stringThree.current = false;
                    stringFour.current = false;
                    stringFive.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringFive);
                    changeStringStatus(stringSix);

                    handleStringOptions(createDropC[1], looped, setSecondString, stringTwo);

                } else if (param === "C" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setThirdString(true);

                    createDropC[0].stop();
                    createDropC[1].stop();
                    createDropC[3].stop();
                    createDropC[4].stop();
                    createDropC[5].stop();

                    stringOne.current = false;
                    stringTwo.current = false;
                    stringFour.current = false;
                    stringFive.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringTwo);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringFive);
                    changeStringStatus(stringSix);

                    handleStringOptions(createDropC[2], looped, setThirdString, stringThree);

                // For when loop mechanic is OFF:
                } else if (param === "F" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFourthString(true);

                    createDropC[0].stop();
                    createDropC[1].stop();
                    createDropC[2].stop();
                    createDropC[4].stop();
                    createDropC[5].stop();

                    stringOne.current = false;
                    stringTwo.current = false;
                    stringThree.current = false;
                    stringFive.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringTwo);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFive);
                    changeStringStatus(stringSix);

                    handleStringOptions(createDropC[3], looped, setFourthString, stringFour);

                } else if (param === "A" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setSixthString(false);
                    setFifthString(true);

                    createDropC[0].stop();
                    createDropC[1].stop();
                    createDropC[2].stop();
                    createDropC[3].stop();
                    createDropC[5].stop();

                    stringOne.current = false;
                    stringTwo.current = false;
                    stringThree.current = false;
                    stringFour.current = false;
                    stringSix.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringTwo);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringSix);

                    handleStringOptions(createDropC[4], looped, setFifthString, stringFive);

                } else if (param === "High D" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(true);

                    createDropC[0].stop();
                    createDropC[1].stop();
                    createDropC[2].stop();
                    createDropC[3].stop();
                    createDropC[4].stop();

                    stringOne.current = false;
                    stringTwo.current = false;
                    stringThree.current = false;
                    stringFour.current = false;
                    stringFive.current = false;

                    changeStringStatus(stringOne);
                    changeStringStatus(stringTwo);
                    changeStringStatus(stringThree);
                    changeStringStatus(stringFour);
                    changeStringStatus(stringFive);

                    handleStringOptions(createDropC[5], looped, setSixthString, stringSix);

                } else if (param === "Low C" && looped.current === false) {
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFirstString(true);

                    handleStringOptions(createDropC[0], looped, setFirstString, stringOne);

                } else if (param === "G" && looped.current === false) {
                    setFirstString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setSecondString(true);

                    handleStringOptions(createDropC[1], looped, setSecondString, stringTwo);

                } else if (param === "C" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setThirdString(true);

                    handleStringOptions(createDropC[2], looped, setThirdString, stringThree);

                } else if (param === "F" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFourthString(true);

                    handleStringOptions(createDropC[3], looped, setFourthString, stringFour);

                } else if (param === "A" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setSixthString(false);
                    setFifthString(true);

                    handleStringOptions(createDropC[4], looped, setFifthString, stringFive);

                } else if (param === "High D" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(true);

                    handleStringOptions(createDropC[5], looped, setSixthString, stringSix);
                }
                return ;

                case "DADGAD":

                    // For when loop mechanic is ON:
                    if (param === "Low D" && looped.current === true) {
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFirstString(true);
    
                        createDADGAD[1].stop();
                        createDADGAD[2].stop();
                        createDADGAD[3].stop();
                        createDADGAD[4].stop();
                        createDADGAD[5].stop();
    
                        stringTwo.current = false;
                        stringThree.current = false;
                        stringFour.current = false;
                        stringFive.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringFive);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDADGAD[0], looped, setFirstString, stringOne);

                    } else if (param === "Low A" && looped.current === true) {
                        setFirstString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setSecondString(true);
    
                        createDADGAD[0].stop();
                        createDADGAD[2].stop();
                        createDADGAD[3].stop();
                        createDADGAD[4].stop();
                        createDADGAD[5].stop();
    
                        stringOne.current = false;
                        stringThree.current = false;
                        stringFour.current = false;
                        stringFive.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringFive);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDADGAD[1], looped, setSecondString, stringTwo);

                    } else if (param === "D" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setThirdString(true);
    
                        createDADGAD[0].stop();
                        createDADGAD[1].stop();
                        createDADGAD[3].stop();
                        createDADGAD[4].stop();
                        createDADGAD[5].stop();
    
                        stringOne.current = false;
                        stringTwo.current = false;
                        stringFour.current = false;
                        stringFive.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringFive);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDADGAD[2], looped, setThirdString, stringThree);
    
                    } else if (param === "G" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFourthString(true);
    
                        createDADGAD[0].stop();
                        createDADGAD[1].stop();
                        createDADGAD[2].stop();
                        createDADGAD[4].stop();
                        createDADGAD[5].stop();
    
                        stringOne.current = false;
                        stringTwo.current = false;
                        stringThree.current = false;
                        stringFive.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFive);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDADGAD[3], looped, setFourthString, stringFour);
    
                    } else if (param === "A" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setSixthString(false);
                        setFifthString(true);
    
                        createDADGAD[0].stop();
                        createDADGAD[1].stop();
                        createDADGAD[2].stop();
                        createDADGAD[3].stop();
                        createDADGAD[5].stop();
    
                        stringOne.current = false;
                        stringTwo.current = false;
                        stringThree.current = false;
                        stringFour.current = false;
                        stringSix.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringSix);
    
                        handleStringOptions(createDADGAD[4], looped, setFifthString, stringFive);
    
                    } else if (param === "High D" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(true);
    
                        createDADGAD[0].stop();
                        createDADGAD[1].stop();
                        createDADGAD[2].stop();
                        createDADGAD[3].stop();
                        createDADGAD[4].stop();
    
                        stringOne.current = false;
                        stringTwo.current = false;
                        stringThree.current = false;
                        stringFour.current = false;
                        stringFive.current = false;
    
                        changeStringStatus(stringOne);
                        changeStringStatus(stringTwo);
                        changeStringStatus(stringThree);
                        changeStringStatus(stringFour);
                        changeStringStatus(stringFive);
    
                        handleStringOptions(createDADGAD[5], looped, setSixthString, stringSix);

                    // For when loop mechanic is OFF:
                    } else if (param === "Low D" && looped.current === false) {
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFirstString(true);
    
                        handleStringOptions(createDADGAD[0], looped, setFirstString, stringOne);
                    } else if (param === "Low A" && looped.current === false) {
                        setFirstString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setSecondString(true);
    
                        handleStringOptions(createDADGAD[1], looped, setSecondString, stringTwo);
                    } else if (param === "D" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setThirdString(true);
    
                        handleStringOptions(createDADGAD[2], looped, setThirdString, stringThree);
                    } else if (param === "G" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFourthString(true);
    
                        handleStringOptions(createDADGAD[3], looped, setFourthString, stringFour);
                    } else if (param === "A" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setSixthString(false);
                        setFifthString(true);
    
                        handleStringOptions(createDADGAD[4], looped, setFifthString, stringFive);
                    } else if (param === "High D" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(true);
    
                        handleStringOptions(createDADGAD[5], looped, setSixthString, stringSix);
                    }
                    return ;

                default:
                    return ;
        }
    }
    
    // State of string style that allows string to light up when clicked/tapped. When true, the string will light up. When false, the string goes back to default style:
    const [firstStringChosen, setFirstString] = useState(false);
    const [secondStringChosen, setSecondString] = useState(false);
    const [thirdStringChosen, setThirdString] = useState(false);
    const [fourthStringChosen, setFourthString] = useState(false);
    const [fifthStringChosen, setFifthString] = useState(false);
    const [sixthStringChosen, setSixthString] = useState(false);

    // Handles Nav-Menu Toggle:
    function handleToggle() {
        setToggle(!isToggled);
    }

    // Handles changing the tuning selection when a user clicks/taps on the one they want from the nav menu:
    const handleClick = async (e) => {
        const tuningId = await e.target.getAttribute("id");
        switch (tuningId) {
            case "0":
                setCurrentlySelected(selection[0]);
                setTuningName(selection[0].name);
                setStringKeys(selection[0].tuningNotes);
                handleToggle();
                if (checked) {
                    handleLoopAction();
                }
                return ;
            case "1":
                setCurrentlySelected(selection[1]);
                setTuningName(selection[1].name);
                setStringKeys(selection[1].tuningNotes);
                handleToggle();
                if (checked) {
                    handleLoopAction();
                }
                return ;
            case "2":
                setCurrentlySelected(selection[2]);
                setTuningName(selection[2].name);
                setStringKeys(selection[2].tuningNotes);
                handleToggle();
                if (checked) {
                    handleLoopAction();
                }
                return ;
            case "3":
                setCurrentlySelected(selection[3]);
                setTuningName(selection[3].name);
                setStringKeys(selection[3].tuningNotes);
                handleToggle();
                if (checked) {
                    handleLoopAction();
                }
                return ;
        
            default:
                setCurrentlySelected(selection[0]);
                setTuningName(selection[0].name);
                setStringKeys(selection[0].tuningNotes);
        }
    }

    // This sets up the currently selected tuning from the tuning menu (Standard Tuning, Drop D, Drop C, DADGAD):
    useEffect(() => {
    }, [currentlySelected]);

    // This helps set up the name of each note of the selected tuning and sends it as the "id" for the strings within the Guitar component:
    useEffect(() => {
    },[stringKey]);

    // This helps update the name of the tuning category in the nav menu title that the user selects:
    useEffect(() => {
    },[tuningName]);

    // This useEffect below helps turn off the lit up string after the user clicks/taps on one. It will allow the string to stay lit for 4 seconds and then it will turn off (go back to the dafault style of the string):
    useEffect(() => {
        (() => {
            if (firstStringChosen === true) {
                setTimeout(() => {
                    setFirstString(!firstStringChosen);
                }, 4000);
            }
            
            if (secondStringChosen === true) {
                setTimeout(() => {
                    setSecondString(!secondStringChosen);
                }, 4000);
            }

            if (thirdStringChosen === true) {
                setTimeout(() => {
                    setThirdString(!thirdStringChosen);
                }, 4000);
            }

            if (fourthStringChosen === true) {
                setTimeout(() => {
                    setFourthString(!fourthStringChosen);
                }, 4000);
            }

            if (fifthStringChosen === true) {
                setTimeout(() => {
                    setFifthString(!fifthStringChosen);
                }, 4000);
            }

            if (sixthStringChosen === true) {
                setTimeout(() => {
                    setSixthString(!sixthStringChosen);
                }, 4000);
            }
        })();
    }, [firstStringChosen, secondStringChosen, thirdStringChosen, fourthStringChosen, fifthStringChosen, sixthStringChosen]);
    
    // This useEffect handles the initial welcome pop-up that a user will see only on their first time visiting the site:
    useEffect(() => {
        const popUp_status = localStorage.getItem("popUp_status");
    
        if (!popUp_status) {
            setVisible(true);
            localStorage.setItem("popUp_status", 1);
        }
    
        if (!visible) {
            return null;
        }
    }, [visible]);

    // Handles whether the initial welcome pop-up is visible (when set to true) or not (when set to false):
    function handlePopUp() {
        setVisible(false);
    }
    
    // This function verifies which tuning the user selected first using the switch statement and then it will acquire the "id" that is assigned to the clicked/tapped string and then execute the handleCurrentSound function:
    const handleSound = (e) => {
        const buttonId = e.target.getAttribute("id");

        switch (tuningName) {

            case "Standard Tuning":
                handleCurrentSound(buttonId);
                return ;
            
            case "Drop D":
                handleCurrentSound(buttonId);
                return ;

            case "Drop C":
                handleCurrentSound(buttonId);
                return ;
            
            case "DADGAD":
                handleCurrentSound(buttonId);
                return ;

            default:
                return ;
        }
    }

    function updateHowlerCtx() {
        console.log(Howler.ctx.state);
        if (Howler.ctx.state !== "running") {
            Howler.ctx.resume();
        }
    }

    return (
        <div onTouchStartCapture={updateHowlerCtx} className={currentlySelected.name === "Standard Tuning" ? "App-Container-Standard" : currentlySelected.name === "Drop D" ? "App-Container-DropD" : currentlySelected.name === "Drop C" ? "App-Container-DropC" : currentlySelected.name === "DADGAD" ? "App-Container-DADGAD" : null}>
            <div className="main-container">
                <header>
                    <div className="app-title-container">
                        <h1 onClick={checkTheSound} className="app-title">Sonus</h1>
                    </div>
                </header>

                <section className={visible ? "tips-section" : "tips-section--closed"}>
                    <Tips 
                        onClick={handlePopUp}
                    />
                </section>

                <section className="notes-section">
                    <TuningSelection 
                        key={currentlySelected.id}
                        className={currentlySelected.className[0]}
                        tuning={currentlySelected.tuningList}
                        value={currentlySelected.tuningList}
                        firstStringChosen={firstStringChosen}
                        secondStringChosen={secondStringChosen}
                        thirdStringChosen={thirdStringChosen}
                        fourthStringChosen={fourthStringChosen}
                        fifthStringChosen={fifthStringChosen}
                        sixthStringChosen={sixthStringChosen}
                        tuneID1={stringKey[0].name}
                        tuneID2={stringKey[1].name}
                        tuneID3={stringKey[2].name}
                        tuneID4={stringKey[3].name}
                        tuneID5={stringKey[4].name}
                        tuneID6={stringKey[5].name}
                        onClick={handleSound}
                    />
                </section>

                <section className="guitar-neck-section">
                    <div className="guitar-looper-container">
                        <div className="hidden-counterbalance"></div>
                        <Guitar 
                            onClick={handleSound}
                            tuneID1={stringKey[0].name}
                            tuneID2={stringKey[1].name}
                            tuneID3={stringKey[2].name}
                            tuneID4={stringKey[3].name}
                            tuneID5={stringKey[4].name}
                            tuneID6={stringKey[5].name}
                            firstStringChosen={firstStringChosen}
                            secondStringChosen={secondStringChosen}
                            thirdStringChosen={thirdStringChosen}
                            fourthStringChosen={fourthStringChosen}
                            fifthStringChosen={fifthStringChosen}
                            sixthStringChosen={sixthStringChosen}
                        />
                        <Looper onClick={handleLoopAction} checked={checked}/>
                    </div>
                    <TuningMenu 
                        selectedTuning={currentlySelected.name}
                        targetToggle={handleClick}
                        toggleNav={handleToggle}
                        isToggled={isToggled}
                        tuning1={selection[0].tuningList}
                        tuning2={selection[1].tuningList}
                        tuning3={selection[2].tuningList}
                        tuning4={selection[3].tuningList}
                    />
                </section>
            </div>
            <footer>
                <div className="footer-div">
                    <p>Created by <a className="footer-link" href="https://rickydlgd.com" title="https://rickydlgd.com" target="_blank" rel="noreferrer">Ricardo Delgado</a></p>
                    <a href="https://www.buymeacoffee.com/rickydlgd" title="Buy Rick a Coffee (:" target="_blank" rel="noreferrer"><i className="buyCoffee fa-solid fa-mug-hot"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Main;