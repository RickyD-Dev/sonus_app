import { Howl } from "howler";
import soundLibrary from "./soundLibrary";

// ----------------- Standard Sounds -----------------:
const standardLowE = new Howl ({
    src: [soundLibrary[0].sounds[0]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const standardA = new Howl ({
    src: [soundLibrary[0].sounds[1]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const standardD = new Howl ({
    src: [soundLibrary[0].sounds[2]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const standardG = new Howl ({
    src: [soundLibrary[0].sounds[3]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const standardB = new Howl ({
    src: [soundLibrary[0].sounds[4]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const standardHighE = new Howl ({
    src: [soundLibrary[0].sounds[5]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const createStandard = [standardLowE, standardA, standardD, standardG, standardB, standardHighE];

// ----------------- Drop D Sounds -----------------:

const dropDLowD = new Howl ({
    src: [soundLibrary[1].sounds[0]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropDA = new Howl ({
    src: [soundLibrary[1].sounds[1]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropDD = new Howl ({
    src: [soundLibrary[1].sounds[2]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropDG = new Howl ({
    src: [soundLibrary[1].sounds[3]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropDB = new Howl ({
    src: [soundLibrary[1].sounds[4]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropDHighE = new Howl ({
    src: [soundLibrary[1].sounds[5]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const createDropD = [dropDLowD, dropDA, dropDD, dropDG, dropDB, dropDHighE];

// ----------------- Drop C Sounds -----------------:
const dropCLowC = new Howl ({
    src: [soundLibrary[2].sounds[0]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropCg = new Howl ({
    src: [soundLibrary[2].sounds[1]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropCc = new Howl ({
    src: [soundLibrary[2].sounds[2]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropCf = new Howl ({
    src: [soundLibrary[2].sounds[3]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropCa = new Howl ({
    src: [soundLibrary[2].sounds[4]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dropCHighD = new Howl ({
    src: [soundLibrary[2].sounds[5]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const createDropC = [dropCLowC, dropCg, dropCc, dropCf, dropCa, dropCHighD];

// ----------------- DADGAD Sounds -----------------:
const dadgadLowD = new Howl ({
    src: [soundLibrary[3].sounds[0]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dadgadLowA = new Howl ({
    src: [soundLibrary[3].sounds[1]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dadgadD = new Howl ({
    src: [soundLibrary[3].sounds[2]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dadgadG = new Howl ({
    src: [soundLibrary[3].sounds[3]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dadgadA = new Howl ({
    src: [soundLibrary[3].sounds[4]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false
});

const dadgadHighD = new Howl ({
    src: [soundLibrary[3].sounds[5]],
    html5: true,
    autoUnlock: true,
    autoSuspend: false,
});

const createDADGAD = [dadgadLowD, dadgadLowA, dadgadD, dadgadG, dadgadA, dadgadHighD];

export {
    createStandard,
    createDropD,
    createDropC,
    createDADGAD,
}