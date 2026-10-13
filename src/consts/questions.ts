export type Question = {
    id: number;
    questionTitle: string;
    title: string;
    audio: string;
    correctAnswer: number;
};

export const questions: Question[] = [
    {
        id: 1,
        questionTitle: "1r Àudio",
        title: "F. Liszt - Liebestraum N. 3",
        audio: "/audio/Liszt.mp3",
        correctAnswer: 0
    },
    {
        id: 2,
        questionTitle: "2n Àudio",
        title: "E. Granados - Danzas Españolas No.2",
        audio: "/audio/Granados_Modified.mp3",
        correctAnswer: 1
    }, 
    {
        id: 3,
        questionTitle: "3r Àudio",
        title: "L. Beethoven - Piano Sonata No. 14",
        audio: "/audio/MoonLightSonata_Modified.mp3",
        correctAnswer: 1
    }, 
    {
        id: 4,
        questionTitle: "4t Àudio",
        title: "Albert Guinovart - Per què he ploart?",
        audio: "/audio/MarICel.mp3",
        correctAnswer: 0
    },
    {
        id: 5,
        questionTitle: "5è Àudio",
        title: "Frankie Valli - Can't Take My Eyes Off You",
        audio: "/audio/CantTakeMyEyes_Modified.mp3",
        correctAnswer: 1
    },
    {
        id: 6,
        questionTitle: "6è Àudio",
        title: "E. Granados - Danzas Españolas No.2",
        audio: "/audio/Granados.mp3",
        correctAnswer: 0
    },
    {
        id: 7,
        questionTitle: "7è Àudio",
        title: "Carlos Gardel - Por una cabeza",
        audio: "/audio/PorUnaCabeza_Modified.mp3",
        correctAnswer: 1
    },
    {
        id: 8,
        questionTitle: "8è Àudio",
        title: "F. Liszt - Liebestraum N. 3",
        audio: "/audio/Liszt_Modified.mp3",
        correctAnswer: 1
    }, 
    {
        id: 9,
        questionTitle: "9è Àudio",
        title: "L. Beethoven - Piano Sonata No. 14",
        audio: "/audio/MoonLightSonata.mp3",
        correctAnswer: 0
    }, 
    {
        id: 10,
        questionTitle: "10è Àudio",
        title: "Carlos Gardel - Por una cabeza",
        audio: "/audio/PorUnaCabeza.mp3",
        correctAnswer: 0
    },
    {
        id: 11,
        questionTitle: "11è Àudio",
        title: "Albert Guinovart - Per què he ploart?",
        audio: "/audio/MarICel.mp3",
        correctAnswer: 0
    },
    {
        id: 12,
        questionTitle: "12è Àudio",
        title: "Frankie Valli - Can't Take My Eyes Off You",
        audio: "/audio/CantTakeMyEyes.mp3",
        correctAnswer: 0
    }
];

//0 Correct
//1 Incorrect
