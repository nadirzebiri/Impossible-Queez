import wordDoc from "../assets/img/questions/word-document.jpg";

export const questions = [
	{
		id: "1aa",
		image: wordDoc,
		categoryName: "Cybersecurity",
		question:
			"If a word document randomly found on internet ask you to enable macros, would you do it?",
		choices: [
			{
				answer: "Yessir",
				good: false,
			},
			{
				answer: "Nah",
				good: true,
			},
			{
				answer: "IDK",
				good: false,
			},
		],
	},
	{
		id: "1ab",
		image: null,
		categoryName: "Programming",
		question: "Here is a loop: for (int i = 0; i <= 0; i--;) is it infinite?",
		choices: [
			{
				answer: "Yes",
				good: true,
			},
			{
				answer: "No",
				good: false,
			},
		],
	},
];
