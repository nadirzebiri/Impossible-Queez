import wordDoc from "../assets/img/questions/word-document.jpg";
import noPlaceLike from "../assets/img/questions/no-place-like.jpg";
import linux from "../assets/img/questions/linux.jpg";
import cybersecurity from "../assets/img/questions/cybersecurity.jpg";
import kaliLinux from "../assets/img/questions/kali-linux.jpg";
import email from "../assets/img/questions/email.jpg";
import wifi from "../assets/img/questions/wifi.jpg";
import website from "../assets/img/questions/website.jpg";
import password from "../assets/img/questions/password.jpg";
import blocOfCode from "../assets/img/questions/bloc-of-code.jpg";
import array from "../assets/img/questions/array.jpg";
import programming from "../assets/img/questions/programming.jpg";
import ifCondition from "../assets/img/questions/if-condition.jpg";
import loop from "../assets/img/questions/loop.jpg";

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
			{
				answer: "I always enable them",
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
	{
		id: "1ac",
		image: null,
		categoryName: "Cybersecurity",
		question: "What does the reboot command do on Linux?",
		choices: [
			{
				answer: "Nothing",
				good: false,
			},
			{
				answer: "Idek",
				good: false,
			},
			{
				answer: "It reboots lol",
				good: true,
			},
			{
				answer: "It resets the computer",
				good: false,
			},
		],
	},
	{
		id: "1ad",
		image: noPlaceLike,
		categoryName: "Cybersecurity",
		question: "there's no place like...",
		choices: [
			{
				answer: "paradise",
				good: false,
			},
			{
				answer: "the ocean",
				good: false,
			},
			{
				answer: "127.0.0.1",
				good: true,
			},
			{
				answer: "the open road",
				good: false,
			},
		],
	},
	{
		id: "1ae",
		image: password,
		categoryName: "Cybersecurity",
		question: "What is the most secure password?",
		choices: [
			{
				answer: "password1",
				good: false,
			},
			{
				answer: "Wh79uW7*GUO4",
				good: true,
			},
			{
				answer: "leanSyLo",
				good: false,
			},
			{
				answer: "qwerty123",
				good: false,
			},
		],
	},
	{
		id: "1af",
		image: linux,
		categoryName: "Cybersecurity",
		question: 'Is "ls" a command only available on certain versions of Linux?',
		choices: [
			{
				answer: "Yes",
				good: false,
			},
			{
				answer: "No",
				good: true,
			},
		],
	},
	{
		id: "1ag",
		image: cybersecurity,
		categoryName: "Cybersecurity",
		question:
			"Is it true that cybersecurity is only relevant for large organizations and governments, and not for individuals or small businesses?",
		choices: [
			{
				answer: "Yes",
				good: false,
			},
			{
				answer: "No",
				good: true,
			},
		],
	},
	{
		id: "1ah",
		image: kaliLinux,
		categoryName: "Cybersecurity",
		question:
			"Is it true that Kali Linux is a Linux distribution specifically designed for digital forensics and penetration testing?",
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
	{
		id: "1ai",
		image: email,
		categoryName: "Cybersecurity",
		question:
			"It is safe to open emails and click on links from unfamiliar sources?",
		choices: [
			{
				answer: "Yes",
				good: false,
			},
			{
				answer: "No",
				good: true,
			},
		],
	},
	{
		id: "1aj",
		image: wifi,
		categoryName: "Cybersecurity",
		question: "Public Wi-Fi networks are always secure.",
		choices: [
			{
				answer: "True",
				good: false,
			},
			{
				answer: "False",
				good: true,
			},
		],
	},
	{
		id: "1ak",
		image: website,
		categoryName: "Cybersecurity",
		question:
			"What is the process called when a hacker uses a legitimate website or service to attack a user's computer?",
		choices: [
			{
				answer: "Phishing",
				good: false,
			},
			{
				answer: "Spearphishing",
				good: false,
			},
			{
				answer: "Clickjacking",
				good: false,
			},
			{
				answer: "Waterholing",
				good: true,
			},
		],
	},
	{
		id: "1al",
		image: blocOfCode,
		categoryName: "Programming",
		question:
			"What is the process of executing a block of code repeatedly called?",
		choices: [
			{
				answer: "Iteration",
				good: false,
			},
			{
				answer: "Recursion",
				good: false,
			},
			{
				answer: "Looping",
				good: true,
			},
			{
				answer: "Iterative recursion",
				good: false,
			},
		],
	},
	{
		id: "1am",
		image: array,
		categoryName: "Programming",
		question: "What is an array in programming?",
		choices: [
			{
				answer: "this: {}",
				good: false,
			},
			{
				answer: "A Pokemon collection",
				good: false,
			},
			{
				answer: "this: []",
				good: true,
			},
			{
				answer: "A collection of socks",
				good: false,
			},
		],
	},
	{
		id: "1an",
		image: programming,
		categoryName: "Programming",
		question: "What is a variable in programming?",
		choices: [
			{
				answer: "A fixed value that cannot be changed",
				good: false,
			},
			{
				answer: "A named location that stores a value",
				good: true,
			},
			{
				answer: "A function that performs a specific task",
				good: false,
			},
			{
				answer: "A block of code",
				good: false,
			},
		],
	},
	{
		id: "1ao",
		image: programming,
		categoryName: "Programming",
		question: "What is the process of assigning a value to a variable called?",
		choices: [
			{
				answer: "Declaring",
				good: false,
			},
			{
				answer: "Eating Cheetos",
				good: false,
			},
			{
				answer: "Initializing",
				good: false,
			},
			{
				answer: "Assigning",
				good: true,
			},
		],
	},
	{
		id: "1ap",
		image: ifCondition,
		categoryName: "Programming",
		question: "What is the process of checking if a condition is met ?",
		choices: [
			{
				answer: "Distributing",
				good: false,
			},
			{
				answer: "Recursion",
				good: false,
			},
			{
				answer: "Iteration",
				good: false,
			},
			{
				answer: "Conditional statement",
				good: true,
			},
		],
	},
	{
		id: "1aq",
		image: loop,
		categoryName: "Programming",
		question: "What's a loop?",
		choices: [
			{
				answer: "A block repeated until a condition is met",
				good: true,
			},
			{
				answer: "The thing in Aladdin",
				good: false,
			},
			{
				answer: "A location that stores a value",
				good: false,
			},
			{
				answer: "A fixed value",
				good: false,
			},
		],
	},
	{
		id: "1ar",
		image: loop,
		categoryName: "Programming",
		question: "What is the process of breaking out of a loop called?",
		choices: [
			{
				answer: "Looping",
				good: false,
			},
			{
				answer: "Squeezing",
				good: false,
			},
			{
				answer: "Recursion",
				good: false,
			},
			{
				answer: "Breaking",
				good: true,
			},
		],
	},
	{
		id: "1as",
		image: programming,
		categoryName: "Programming",
		question: "What is a function in programming?",
		choices: [
			{
				answer: "A block repeated until a condition is met",
				good: false,
			},
			{
				answer: "Way to make your code more organized",
				good: false,
			},
			{
				answer: "A fixed value",
				good: false,
			},
			{
				answer: "A block of code that performs a specific task",
				good: true,
			},
		],
	},
	{
		id: "1at",
		image: programming,
		categoryName: "Programming",
		question: "What is a parameter in programming?",
		choices: [
			{
				answer: "It doesn't exist",
				good: false,
			},
			{
				answer: "A piece of data that can be changed",
				good: false,
			},
			{
				answer: "A value passed to a function when it is called",
				good: true,
			},
			{
				answer: "A unit of measurement in the metric system",
				good: false,
			},
		],
	},
];
