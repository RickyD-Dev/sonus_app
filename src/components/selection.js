const selection = [
    {
        id: 0,
        name: "Standard Tuning",
        className: ["standard-tuning","standard-tuning--notActive"],
        tuningList: ["E ","A ","D ","G ","B ","E "],
        tuningNotes: [
            {name: "Low E"},
            {name: "A"},
            {name: "D"},
            {name: "G"},
            {name: "B"},
            {name: "High E"}
        ]
    },
    {
        id: 1,
        name: "Drop D",
        className: ["dropD-tuning","dropD-tuning--notActive"],
        tuningList: ["D ","A ","D ","G ","B ","E "],
        tuningNotes: [
            {name: "Low D"},
            {name: "A"},
            {name: "D"},
            {name: "G"},
            {name: "B"},
            {name: "High E"}
        ]
    },
    {
        id: 2,
        name: "Drop C",
        className: ["dropC-tuning","dropC-tuning--notActive"],
        tuningList: ["C ","G ","C ","F ","A ","D "],
        tuningNotes: [
            {name: "Low C"},
            {name: "G"},
            {name: "C"},
            {name: "F"},
            {name: "A"},
            {name: "High D"}
        ],
    },
    {
        id: 3,
        name: "DADGAD",
        className: ["dadgad-tuning","dadgad-tuning--notActive"],
        tuningList: ["D ","A ","D ","G ","A ","D "],
        tuningNotes: [
            {name: "Low D"},
            {name: "Low A"},
            {name: "D"},
            {name: "G"},
            {name: "A"},
            {name: "High D"}
        ]
    },
];

export default selection;