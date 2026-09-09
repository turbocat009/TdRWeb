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
        questionTitle: "1st Audio",
        title: "Chopin - Mazurka Op. 8",
        audio: "/audio/Chopin_1.wav",
        correctAnswer: 1
    },
    {
        id: 2,
        questionTitle: "2nd Audio",
        title: "Antonia",
        audio: "/audio/Chopin_1.wav",
        correctAnswer: 0
    }, 
    {
        id: 3,
        questionTitle: "3rd Audio",
        title: "Sisi",
        audio: "/audio/Chopin_1.wav",
        correctAnswer: 1
    }, 
    {
        id: 4,
        questionTitle: "4th Audio",
        title: "Xd",
        audio: "/audio/Chopin_1.wav",
        correctAnswer: 1
    },
    {
        id: 5,
        questionTitle: "5th Audio",
        title: "daadsa",
        audio: "/audio/Chopin_1.wav",
        correctAnswer: 0
    },
    {
        id: 6,
        questionTitle: "6th Audio",
        title: "Xfdssfsd",
        audio: "/audio/Chopin_1.wav",
        correctAnswer: 0
    },
];
