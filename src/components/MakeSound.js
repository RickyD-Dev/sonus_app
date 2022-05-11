import { Howl } from "howler";


function MakeSound(source, string) {
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
        preload: false,
        onplay: isPlaying,
        onend: () => {
            sound.unload();
        },
        onunload: () => {
            console.log(sound + " has NOW been UNloaded.");
        },
        autoUnlock: true,
        autoSuspend: false
    });

    return sound;
}

export default MakeSound;