// ! NO LONGER IN USE:

import { Howl } from "howler";

    // // Standard Sounds:
    // const standardLowE = MakeSound(selection[0].tuningNotes[0].sound, stringOne);
    // const standardA = MakeSound(selection[0].tuningNotes[1].sound, stringTwo);
    // const standardD = MakeSound(selection[0].tuningNotes[2].sound, stringThree);
    // const standardG = MakeSound(selection[0].tuningNotes[3].sound, stringFour);
    // const standardB = MakeSound(selection[0].tuningNotes[4].sound, stringFive);
    // const standardHighE = MakeSound(selection[0].tuningNotes[5].sound, stringSix);

    // // Drop D Sounds:
    // const dropDLowD = MakeSound(selection[1].tuningNotes[0].sound, stringOne);
    // const dropDA = MakeSound(selection[1].tuningNotes[1].sound, stringTwo);
    // const dropDD = MakeSound(selection[1].tuningNotes[2].sound, stringThree);
    // const dropDG = MakeSound(selection[1].tuningNotes[3].sound, stringFour);
    // const dropDB = MakeSound(selection[1].tuningNotes[4].sound, stringFive);
    // const dropDHighE = MakeSound(selection[1].tuningNotes[5].sound, stringSix);

    // // Drop C Sounds:
    // const dropCLowC = MakeSound(selection[2].tuningNotes[0].sound, stringOne);
    // const dropCg = MakeSound(selection[2].tuningNotes[1].sound, stringTwo);
    // const dropCc = MakeSound(selection[2].tuningNotes[2].sound, stringThree);
    // const dropCf = MakeSound(selection[2].tuningNotes[3].sound, stringFour);
    // const dropCa = MakeSound(selection[2].tuningNotes[4].sound, stringFive);
    // const dropCHighD = MakeSound(selection[2].tuningNotes[5].sound, stringSix);

    // // DADGAD Sounds:
    // const dadgadLowD = MakeSound(selection[3].tuningNotes[0].sound, stringOne);
    // const dadgadLowA = MakeSound(selection[3].tuningNotes[1].sound, stringTwo);
    // const dadgadD = MakeSound(selection[3].tuningNotes[2].sound, stringThree);
    // const dadgadG = MakeSound(selection[3].tuningNotes[3].sound, stringFour);
    // const dadgadA = MakeSound(selection[3].tuningNotes[4].sound, stringFive);
    // const dadgadHighD = MakeSound(selection[3].tuningNotes[5].sound, stringSix);


function MakeSound(source, string) {
    // function isPlaying() {
    // //     --Below works great to fire a function while sound is playing--    
    //     if (sound.playing()) {
    //         if (string.current === false) {
    //             sound.stop();
    //         }
    //         setTimeout(isPlaying, 300);
    //     }
    // }

    const sound = new Howl({
        src: [source],
        onunload: () => {
            console.log(sound + " has NOW been UNloaded.");
        },
        autoUnlock: true,
        autoSuspend: false
    });

    return sound;
}

export default MakeSound;