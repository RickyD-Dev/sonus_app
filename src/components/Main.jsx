import React, { useEffect, useState, useRef } from "react";
import Guitar from "./Guitar";
import Looper from "./Looper";
import MakeSound from "./MakeSound";
import TuningMenu from "./TuningMenu";
import TuningSelection from "./TuningSelection";
import Tips from "./Tips";

// Standard Tuning Sound Imports:
import Standard_LowE from "./sounds/Standard/Standard_LowE_String.wav";
import Standard_A from "./sounds/Standard/Standard_A_String.wav";
import Standard_D from "./sounds/Standard/Standard_D_String.wav";
import Standard_G from "./sounds/Standard/Standard_G_String.wav";
import Standard_B from "./sounds/Standard/Standard_B_String.wav";
import Standard_HighE from "./sounds/Standard/Standard_HighE_String.wav";
// Drop D Sound Imports:
import DropD_LowD from "./sounds/DropD/DropD_LowD_String.wav";
import DropD_A from "./sounds/DropD/DropD_A_String.wav";
import DropD_D from "./sounds/DropD/DropD_D_String.wav";
import DropD_G from "./sounds/DropD/DropD_G_String.wav";
import DropD_B from "./sounds/DropD/DropD_B_String.wav";
import DropD_HighE from "./sounds/DropD/DropD_HighE_String.wav";
// Drop C Sound Imports:
import DropC_LowC from "./sounds/DropC/DropC_LowC_String.wav";
import DropC_G from "./sounds/DropC/DropC_G_String.wav";
import DropC_C from "./sounds/DropC/DropC_C_String.wav";
import DropC_F from "./sounds/DropC/DropC_F_String.wav";
import DropC_A from "./sounds/DropC/DropC_A_String.wav";
import DropC_HighD from "./sounds/DropC/DropC_HighD_String.wav";
// DADGAD Sound Imports:
import dadgad_LowD from "./sounds/DADGAD/DADGAD_LowD_String.wav";
import dadgad_LowA from "./sounds/DADGAD/DADGAD_LowA_String.wav";
import dadgad_D from "./sounds/DADGAD/DADGAD_D_String.wav";
import dadgad_G from "./sounds/DADGAD/DADGAD_G_String.wav";
import dadgad_A from "./sounds/DADGAD/DADGAD_A_String.wav";
import dadgad_HighD from "./sounds/DADGAD/DADGAD_HighD_String.wav";

function Main() {

    const selection = [
        {
            id: 0,
            name: "Standard Tuning",
            className: ["standard-tuning","standard-tuning--notActive"],
            tuningList: ["E ","A ","D ","G ","B ","E "],
            tuningNotes: [
                {name: "Low E", sound: Standard_LowE},
                {name: "A", sound: Standard_A},
                {name: "D", sound: Standard_D},
                {name: "G", sound: Standard_G},
                {name: "B", sound: Standard_B},
                {name: "High E", sound: Standard_HighE}
            ]
        },
        {
            id: 1,
            name: "Drop D",
            className: ["dropD-tuning","dropD-tuning--notActive"],
            tuningList: ["D ","A ","D ","G ","B ","E "],
            tuningNotes: [
                {name: "Low D", sound: DropD_LowD},
                {name: "A", sound: DropD_A},
                {name: "D", sound: DropD_D},
                {name: "G", sound: DropD_G},
                {name: "B", sound: DropD_B},
                {name: "High E", sound: DropD_HighE}
            ]
        },
        {
            id: 2,
            name: "Drop C",
            className: ["dropC-tuning","dropC-tuning--notActive"],
            tuningList: ["C ","G ","C ","F ","A ","D "],
            tuningNotes: [
                {name: "Low C", sound: DropC_LowC},
                {name: "G", sound: DropC_G},
                {name: "C", sound: DropC_C},
                {name: "F", sound: DropC_F},
                {name: "A", sound: DropC_A},
                {name: "High D", sound: DropC_HighD}
            ],
        },
        {
            id: 3,
            name: "DADGAD",
            className: ["dadgad-tuning","dadgad-tuning--notActive"],
            tuningList: ["D ","A ","D ","G ","A ","D "],
            tuningNotes: [
                {name: "Low D", sound: dadgad_LowD},
                {name: "Low A", sound: dadgad_LowA},
                {name: "D", sound: dadgad_D},
                {name: "G", sound: dadgad_G},
                {name: "A", sound: dadgad_A},
                {name: "High D", sound: dadgad_HighD}
            ]
        },
    ];

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
        console.log("Looped current is: " + looped.current);
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
    // --- It takes 5 parameters: 
    // 1. The actual sound (example: standardLowE),
    // 2. The loop ref to see if true/false (example: looped),
    // 3. String ref to see if true/false (example: stringOne),
    // 4. The setString function to change the state of the const responsible for letting the string light up or not (example: setFirstString),
    // 5. Finally, the stringState const that you would place inside the setString function (example: firstStringChosen).
    // --- When executed:
    // Allows the sound to play first and logs that it is indeed playing in the console.
    // Once the sound reaches the end, it will log that it is finished and then it'll decided what to do depending on whether the Loop button is on (looped.current set to true) or not (looped.current set to false).
    // If Loop button is ON, it will keep the stringRef as true which will allow the sound to play over & over as long as the Loop is on. It will check if Loop is still on after the sound reaches the end.
    // If Loop button is OFF, it will set the stringRef to false which will stop the sound entirely.
    function handleStringOptions(sound, loopRef, stringRef, setFunc, stringState) {
        sound.play();
        console.log("Playing");
        sound.on("end", () => {
            console.log("Finished Playing.");
            if (loopRef.current === false) {
                stringChangeNow(stringRef);
                console.log("String Now FALSE: " + stringRef.current);
                changeStringStatus(stringRef);
            } else if (loopRef.current === true) {
                sound.play();
                setFunc(!stringState);
                console.log("Loop is currently: " + loopRef.current);
            } else {
                console.log("Error.");
            }
        });
    }

    // When true, the sounds are allowed to play. When false, the sound stops.
    const stringOne = useRef(true);
    const stringTwo = useRef(true);
    const stringThree = useRef(true);
    const stringFour = useRef(true);
    const stringFive = useRef(true);
    const stringSix = useRef(true);

    // Standard Sounds:
    const standardLowE = MakeSound(selection[0].tuningNotes[0].sound, stringOne);
    const standardA = MakeSound(selection[0].tuningNotes[1].sound, stringTwo);
    const standardD = MakeSound(selection[0].tuningNotes[2].sound, stringThree);
    const standardG = MakeSound(selection[0].tuningNotes[3].sound, stringFour);
    const standardB = MakeSound(selection[0].tuningNotes[4].sound, stringFive);
    const standardHighE = MakeSound(selection[0].tuningNotes[5].sound, stringSix);

    // Drop D Sounds:
    const dropDLowD = MakeSound(selection[1].tuningNotes[0].sound, stringOne);
    const dropDA = MakeSound(selection[1].tuningNotes[1].sound, stringTwo);
    const dropDD = MakeSound(selection[1].tuningNotes[2].sound, stringThree);
    const dropDG = MakeSound(selection[1].tuningNotes[3].sound, stringFour);
    const dropDB = MakeSound(selection[1].tuningNotes[4].sound, stringFive);
    const dropDHighE = MakeSound(selection[1].tuningNotes[5].sound, stringSix);

    // Drop C Sounds:
    const dropCLowC = MakeSound(selection[2].tuningNotes[0].sound, stringOne);
    const dropCg = MakeSound(selection[2].tuningNotes[1].sound, stringTwo);
    const dropCc = MakeSound(selection[2].tuningNotes[2].sound, stringThree);
    const dropCf = MakeSound(selection[2].tuningNotes[3].sound, stringFour);
    const dropCa = MakeSound(selection[2].tuningNotes[4].sound, stringFive);
    const dropCHighD = MakeSound(selection[2].tuningNotes[5].sound, stringSix);

    // DADGAD Sounds:
    const dadgadLowD = MakeSound(selection[3].tuningNotes[0].sound, stringOne);
    const dadgadLowA = MakeSound(selection[3].tuningNotes[1].sound, stringTwo);
    const dadgadD = MakeSound(selection[3].tuningNotes[2].sound, stringThree);
    const dadgadG = MakeSound(selection[3].tuningNotes[3].sound, stringFour);
    const dadgadA = MakeSound(selection[3].tuningNotes[4].sound, stringFive);
    const dadgadHighD = MakeSound(selection[3].tuningNotes[5].sound, stringSix);

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

                    standardA.stop();
                    standardD.stop();
                    standardG.stop();
                    standardB.stop();
                    standardHighE.stop();

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

                    handleStringOptions(standardLowE, looped, stringOne, setFirstString, firstStringChosen);

                } else if (param === "A" && looped.current === true) {
                    setFirstString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setSecondString(true);

                    standardLowE.stop();
                    standardD.stop();
                    standardG.stop();
                    standardB.stop();
                    standardHighE.stop();

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

                    handleStringOptions(standardA, looped, stringTwo, setSecondString, secondStringChosen);

                } else if (param === "D" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setThirdString(true);

                    standardLowE.stop();
                    standardA.stop();
                    standardG.stop();
                    standardB.stop();
                    standardHighE.stop();

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

                    handleStringOptions(standardD, looped, stringThree, setThirdString, thirdStringChosen);

                } else if (param === "G" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFourthString(true);

                    standardLowE.stop();
                    standardA.stop();
                    standardD.stop();
                    standardB.stop();
                    standardHighE.stop();

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

                    handleStringOptions(standardG, looped, stringFour, setFourthString, fourthStringChosen);

                } else if (param === "B" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setSixthString(false);
                    setFifthString(true);

                    standardLowE.stop();
                    standardA.stop();
                    standardD.stop();
                    standardG.stop();
                    standardHighE.stop();

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

                    handleStringOptions(standardB, looped, stringFive, setFifthString, fifthStringChosen);

                } else if (param === "High E" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(true);

                    standardLowE.stop();
                    standardA.stop();
                    standardD.stop();
                    standardG.stop();
                    standardB.stop();

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

                    handleStringOptions(standardHighE, looped, stringSix, setSixthString, sixthStringChosen);

                // For when loop mechanic is OFF:
                } else if (param === "Low E" && looped.current === false) {
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFirstString(true);

                    handleStringOptions(standardLowE, looped, stringOne, setFirstString, firstStringChosen);
                    console.log(param);
                } else if (param === "A" && looped.current === false) {
                    setFirstString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setSecondString(true);

                    handleStringOptions(standardA, looped, stringTwo, setSecondString, secondStringChosen);
                } else if (param === "D" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setThirdString(true);

                    handleStringOptions(standardD, looped, stringThree, setThirdString, thirdStringChosen);
                } else if (param === "G" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFourthString(true);

                    handleStringOptions(standardG, looped, stringFour, setFourthString, fourthStringChosen);
                } else if (param === "B" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setSixthString(false);
                    setFifthString(true);

                    handleStringOptions(standardB, looped, stringFive, setFifthString, fifthStringChosen);
                } else if (param === "High E" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(true);

                    handleStringOptions(standardHighE, looped, stringSix, setSixthString, sixthStringChosen);
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
    
                        dropDA.stop();
                        dropDD.stop();
                        dropDG.stop();
                        dropDB.stop();
                        dropDHighE.stop();
    
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
    
                        handleStringOptions(dropDLowD, looped, stringOne, setFirstString, firstStringChosen);
                    } else if (param === "A" && looped.current === true) {
                        setFirstString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setSecondString(true);
    
                        dropDLowD.stop();
                        dropDD.stop();
                        dropDG.stop();
                        dropDB.stop();
                        dropDHighE.stop();
    
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
    
                        handleStringOptions(dropDA, looped, stringTwo, setSecondString, secondStringChosen);
                    } else if (param === "D" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setThirdString(true);
    
                        dropDLowD.stop();
                        dropDA.stop();
                        dropDG.stop();
                        dropDB.stop();
                        dropDHighE.stop();
    
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
    
                        handleStringOptions(dropDD, looped, stringThree, setThirdString, thirdStringChosen);
    
                    } else if (param === "G" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFourthString(true);
    
                        dropDLowD.stop();
                        dropDA.stop();
                        dropDD.stop();
                        dropDB.stop();
                        dropDHighE.stop();
    
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
    
                        handleStringOptions(dropDG, looped, stringFour, setFourthString, fourthStringChosen);
    
                    } else if (param === "B" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setSixthString(false);
                        setFifthString(true);
    
                        dropDLowD.stop();
                        dropDA.stop();
                        dropDD.stop();
                        dropDG.stop();
                        dropDHighE.stop();
    
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
    
                        handleStringOptions(dropDB, looped, stringFive, setFifthString, fifthStringChosen);
    
                    } else if (param === "High E" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(true);
    
                        dropDLowD.stop();
                        dropDA.stop();
                        dropDD.stop();
                        dropDG.stop();
                        dropDB.stop();
    
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
    
                        handleStringOptions(dropDHighE, looped, stringSix, setSixthString, sixthStringChosen);

                    // For when loop mechanic is OFF:
                    } else if (param === "Low D" && looped.current === false) {
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFirstString(true);
    
                        handleStringOptions(dropDLowD, looped, stringOne, setFirstString, firstStringChosen);
                        console.log(param);
                    } else if (param === "A" && looped.current === false) {
                        setFirstString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setSecondString(true);
    
                        handleStringOptions(dropDA, looped, stringTwo, setSecondString, secondStringChosen);
                    } else if (param === "D" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setThirdString(true);
    
                        handleStringOptions(dropDD, looped, stringThree, setThirdString, thirdStringChosen);
                    } else if (param === "G" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFourthString(true);
    
                        handleStringOptions(dropDG, looped, stringFour, setFourthString, fourthStringChosen);
                    } else if (param === "B" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setSixthString(false);
                        setFifthString(true);
    
                        handleStringOptions(dropDB, looped, stringFive, setFifthString, fifthStringChosen);
                    } else if (param === "High E" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(true);
    
                        handleStringOptions(dropDHighE, looped, stringSix, setSixthString, sixthStringChosen);
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

                    dropCg.stop();
                    dropCc.stop();
                    dropCf.stop();
                    dropCa.stop();
                    dropCHighD.stop();

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

                    handleStringOptions(dropCLowC, looped, stringOne, setFirstString, firstStringChosen);

                } else if (param === "G" && looped.current === true) {
                    setFirstString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setSecondString(true);

                    dropCLowC.stop();
                    dropCc.stop();
                    dropCf.stop();
                    dropCa.stop();
                    dropCHighD.stop();

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

                    handleStringOptions(dropCg, looped, stringTwo, setSecondString, secondStringChosen);

                } else if (param === "C" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setThirdString(true);

                    dropCLowC.stop();
                    dropCg.stop();
                    dropCf.stop();
                    dropCa.stop();
                    dropCHighD.stop();

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

                    handleStringOptions(dropCc, looped, stringThree, setThirdString, thirdStringChosen);

                // For when loop mechanic is OFF:
                } else if (param === "F" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFourthString(true);

                    dropCLowC.stop();
                    dropCg.stop();
                    dropCc.stop();
                    dropCa.stop();
                    dropCHighD.stop();

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

                    handleStringOptions(dropCf, looped, stringFour, setFourthString, fourthStringChosen);

                } else if (param === "A" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setSixthString(false);
                    setFifthString(true);

                    dropCLowC.stop();
                    dropCg.stop();
                    dropCc.stop();
                    dropCf.stop();
                    dropCHighD.stop();

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

                    handleStringOptions(dropCa, looped, stringFive, setFifthString, fifthStringChosen);

                } else if (param === "High D" && looped.current === true) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(true);

                    dropCLowC.stop();
                    dropCg.stop();
                    dropCc.stop();
                    dropCf.stop();
                    dropCa.stop();

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

                    handleStringOptions(dropCHighD, looped, stringSix, setSixthString, sixthStringChosen);

                } else if (param === "Low C" && looped.current === false) {
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFirstString(true);

                    handleStringOptions(dropCLowC, looped, stringOne, setFirstString, firstStringChosen);

                } else if (param === "G" && looped.current === false) {
                    setFirstString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setSecondString(true);

                    handleStringOptions(dropCg, looped, stringTwo, setSecondString, secondStringChosen);

                } else if (param === "C" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setThirdString(true);

                    handleStringOptions(dropCc, looped, stringThree, setThirdString, thirdStringChosen);

                } else if (param === "F" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFifthString(false);
                    setSixthString(false);
                    setFourthString(true);

                    handleStringOptions(dropCf, looped, stringFour, setFourthString, fourthStringChosen);

                } else if (param === "A" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setSixthString(false);
                    setFifthString(true);

                    handleStringOptions(dropCa, looped, stringFive, setFifthString, fifthStringChosen);

                } else if (param === "High D" && looped.current === false) {
                    setFirstString(false);
                    setSecondString(false);
                    setThirdString(false);
                    setFourthString(false);
                    setFifthString(false);
                    setSixthString(true);

                    handleStringOptions(dropCHighD, looped, stringSix, setSixthString, sixthStringChosen);
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
    
                        dadgadLowA.stop();
                        dadgadD.stop();
                        dadgadG.stop();
                        dadgadA.stop();
                        dadgadHighD.stop();
    
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
    
                        handleStringOptions(dadgadLowD, looped, stringOne, setFirstString, firstStringChosen);
                    } else if (param === "Low A" && looped.current === true) {
                        setFirstString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setSecondString(true);
    
                        dadgadLowD.stop();
                        dadgadD.stop();
                        dadgadG.stop();
                        dadgadA.stop();
                        dadgadHighD.stop();
    
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
    
                        handleStringOptions(dadgadLowA, looped, stringTwo, setSecondString, secondStringChosen);
                    } else if (param === "D" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setThirdString(true);
    
                        dadgadLowD.stop();
                        dadgadLowA.stop();
                        dadgadG.stop();
                        dadgadA.stop();
                        dadgadHighD.stop();
    
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
    
                        handleStringOptions(dadgadD, looped, stringThree, setThirdString, thirdStringChosen);
    
                    } else if (param === "G" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFourthString(true);
    
                        dadgadLowD.stop();
                        dadgadLowA.stop();
                        dadgadD.stop();
                        dadgadA.stop();
                        dadgadHighD.stop();
    
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
    
                        handleStringOptions(dadgadG, looped, stringFour, setFourthString, fourthStringChosen);
    
                    } else if (param === "A" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setSixthString(false);
                        setFifthString(true);
    
                        dadgadLowD.stop();
                        dadgadLowA.stop();
                        dadgadD.stop();
                        dadgadG.stop();
                        dadgadHighD.stop();
    
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
    
                        handleStringOptions(dadgadA, looped, stringFive, setFifthString, fifthStringChosen);
    
                    } else if (param === "High D" && looped.current === true) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(true);
    
                        dadgadLowD.stop();
                        dadgadLowA.stop();
                        dadgadD.stop();
                        dadgadG.stop();
                        dadgadA.stop();
    
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
    
                        handleStringOptions(dadgadHighD, looped, stringSix, setSixthString, sixthStringChosen);

                    // For when loop mechanic is OFF:
                    } else if (param === "Low D" && looped.current === false) {
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFirstString(true);
    
                        handleStringOptions(dadgadLowD, looped, stringOne, setFirstString, firstStringChosen);
                        console.log(param);
                    } else if (param === "Low A" && looped.current === false) {
                        setFirstString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setSecondString(true);
    
                        handleStringOptions(dadgadLowA, looped, stringTwo, setSecondString, secondStringChosen);
                    } else if (param === "D" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setThirdString(true);
    
                        handleStringOptions(dadgadD, looped, stringThree, setThirdString, thirdStringChosen);
                    } else if (param === "G" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFifthString(false);
                        setSixthString(false);
                        setFourthString(true);
    
                        handleStringOptions(dadgadG, looped, stringFour, setFourthString, fourthStringChosen);
                    } else if (param === "A" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setSixthString(false);
                        setFifthString(true);
    
                        handleStringOptions(dadgadA, looped, stringFive, setFifthString, fifthStringChosen);
                    } else if (param === "High D" && looped.current === false) {
                        setFirstString(false);
                        setSecondString(false);
                        setThirdString(false);
                        setFourthString(false);
                        setFifthString(false);
                        setSixthString(true);
    
                        handleStringOptions(dadgadHighD, looped, stringSix, setSixthString, sixthStringChosen);
                    }
                    return ;

                default:
                    console.log("Error.");
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
        console.log("Here's the current selection: " + JSON.stringify(currentlySelected));
    }, [currentlySelected]);

    // This helps set up the name of each note of the selected tuning and sends it as the "id" for the strings within the Guitar component:
    useEffect(() => {
        console.log(stringKey);
    },[stringKey]);

    // This helps update the name of the tuning category in the nav menu title that the user selects:
    useEffect(() => {
        console.log("Tuning selected: " + tuningName);
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
                console.log("Nothing was plucked.");
                return ;
        }
    }

    return (
        <div className={currentlySelected.name === "Standard Tuning" ? "App-Container-Standard" : currentlySelected.name === "Drop D" ? "App-Container-DropD" : currentlySelected.name === "Drop C" ? "App-Container-DropC" : currentlySelected.name === "DADGAD" ? "App-Container-DADGAD" : null}>
            <div className="main-container">
                <header>
                    <div className="app-title-container">
                        <h1 className="app-title">Sonus</h1>
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