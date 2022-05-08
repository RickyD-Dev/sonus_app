import { Howler, Howl } from "howler";


function MakeSound(source, string) {
    function isPlaying() {
    //     --Below works great to fire a function while sound is playing--
        if (Howler.ctx && Howler.ctx.state == "suspended") {
            Howler.ctx.resume();
        }
        
        if (Howler.ctx && Howler.ctx.state == "interrupted") {
            Howler.ctx.resume();
        }
        
        if (sound.playing()) {
            if (string.current === false) {
                sound.stop();
            }
            setTimeout(isPlaying, 300);
        }
    }
    const sound = new Howl({
        src: [source],
        onplay: isPlaying,
        autoUnlock: true,
        autoSuspend: false
    });

    return sound;
}

export default MakeSound;