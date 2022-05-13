// This function handles the logic for each string.
    // --- It takes 3 parameters: 
    // 1. The actual sound (example: standardLowE),
    // 2. The loop ref to see if true/false (example: looped),
    // 3. The setString function to change the state of the const responsible for letting the string light up or not (example: setFirstString),
    // 4. The string parameter is tied to the string refs (stringOne, stringTwo, etc.). Mainly used in the isPlaying() function.
    // --- When executed:
    // Allows the sound to play and once it begins to play, it will execute windowIsHidden() & isPlaying().
    // Once the sound reaches the end, it will decided what to do depending on whether the Loop button is ON (looped.current set to true) or OFF (looped.current set to false).
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

        function windowIsHidden() {
                if (sound.playing()) {
                    if (document.visibilityState === "hidden") {
                        sound.stop();
                    }
                    setTimeout(windowIsHidden, 200);
                }
            }

        sound.on("play", () => {
            windowIsHidden();
            isPlaying();
        });

        sound.on("end", () => {
            setFunc(false);
            if (loopRef.current === true) {
                sound.on("play", () => {
                    setFunc(true);
                });
                if (!sound.playing()){
                    sound.play();
                }
            }
        });

        if (document.visibilityState === "visible") {
            sound.play();
        }
    }

export default handleStringOptions;