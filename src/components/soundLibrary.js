// Standard Tuning Sound Imports:
import Standard_LowE from "./sounds/Standard/Standard_LowE_String.mp3";
import Standard_A from "./sounds/Standard/Standard_A_String.mp3";
import Standard_D from "./sounds/Standard/Standard_D_String.mp3";
import Standard_G from "./sounds/Standard/Standard_G_String.mp3";
import Standard_B from "./sounds/Standard/Standard_B_String.mp3";
import Standard_HighE from "./sounds/Standard/Standard_HighE_String.mp3";
// Drop D Sound Imports:
import DropD_LowD from "./sounds/DropD/DropD_LowD_String.mp3";
import DropD_A from "./sounds/DropD/DropD_A_String.mp3";
import DropD_D from "./sounds/DropD/DropD_D_String.mp3";
import DropD_G from "./sounds/DropD/DropD_G_String.mp3";
import DropD_B from "./sounds/DropD/DropD_B_String.mp3";
import DropD_HighE from "./sounds/DropD/DropD_HighE_String.mp3";
// Drop C Sound Imports:
import DropC_LowC from "./sounds/DropC/DropC_LowC_String.mp3";
import DropC_G from "./sounds/DropC/DropC_G_String.mp3";
import DropC_C from "./sounds/DropC/DropC_C_String.mp3";
import DropC_F from "./sounds/DropC/DropC_F_String.mp3";
import DropC_A from "./sounds/DropC/DropC_A_String.mp3";
import DropC_HighD from "./sounds/DropC/DropC_HighD_String.mp3";
// DADGAD Sound Imports:
import dadgad_LowD from "./sounds/DADGAD/DADGAD_LowD_String.mp3";
import dadgad_LowA from "./sounds/DADGAD/DADGAD_LowA_String.mp3";
import dadgad_D from "./sounds/DADGAD/DADGAD_D_String.mp3";
import dadgad_G from "./sounds/DADGAD/DADGAD_G_String.mp3";
import dadgad_A from "./sounds/DADGAD/DADGAD_A_String.mp3";
import dadgad_HighD from "./sounds/DADGAD/DADGAD_HighD_String.mp3";

const soundLibrary = [
    {
        id: 0,
        name: "Standard",
        sounds: [Standard_LowE, Standard_A, Standard_D, Standard_G, Standard_B, Standard_HighE]
    },
    {
        id: 1,
        name: "Drop D",
        sounds: [DropD_LowD, DropD_A, DropD_D, DropD_G, DropD_B, DropD_HighE]
    },
    {
        id: 2,
        name: "Drop C",
        sounds: [DropC_LowC, DropC_G, DropC_C, DropC_F, DropC_A, DropC_HighD]
    },
    {
        id: 3,
        name: "DADGAD",
        sounds: [dadgad_LowD, dadgad_LowA, dadgad_D, dadgad_G, dadgad_A, dadgad_HighD]
    },
]

export default soundLibrary;