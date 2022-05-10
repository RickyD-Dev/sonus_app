import { Howler, Howl } from "howler";


function MakeSound(source, string) {
    function checkHowlerCtx() {
        if (Howler.ctx.state == "suspended") {
            Howler.ctx.resume().then(() => {
                //     --Below works great to fire a function while sound is playing--    
                    if (sound.playing()) {
                        if (string.current === false) {
                            sound.stop();
                        }
                        setTimeout(isPlaying, 300);
                    }
                });
        }
    }

    const sound = new Howl({
        src: [source],
        onplay: checkHowlerCtx,
        autoUnlock: true,
        autoSuspend: false
    });

    return sound;
}

export default MakeSound;