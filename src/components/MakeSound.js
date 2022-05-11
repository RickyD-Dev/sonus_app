import { Howl } from "howler";


function MakeSound(source, string) {
    function checkHowlState() {
        const stateOfSound = sound.state();
        if (stateOfSound == "loaded") {
            console.log("I HAVE BEEN LOADED");
        }

        if (stateOfSound == "unloaded") {
            console.log("I have been unloaded!!");
        }
    }

    function isPlaying() {
    //     --Below works great to fire a function while sound is playing--    
        if (sound.playing()) {
            if (string.current === false) {
                sound.stop();
            }
            setTimeout(isPlaying, 300);
        }
    }

    const sound = new Howl({
        src: [source],
        onload: checkHowlState,
        onplay: isPlaying,
        onloaderror(id, err) {
            checkHowlState();
            console.log('failed to load sound file:', { id, err });
        },
        onplayerror(id, err) {
            checkHowlState();
            console.log('failed to play sound file:', { id, err });
        },
        autoUnlock: true,
        autoSuspend: false
    });

    return sound;
}

export default MakeSound;