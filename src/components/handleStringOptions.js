function handleStringOptions(sound, loopRef, setFunc, string) {

    function isPlaying() {
    //     --Below works great to fire a function while sound is playing--    
        if (sound.playing()) {
            if (string.current === false) {
                sound.stop();
            }
            setTimeout(isPlaying, 300);
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
            sound.play();
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

export default handleStringOptions;