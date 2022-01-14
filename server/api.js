import { Router } from "express";

const energisers = [
	{
		id: "1",
		name: "Increment by one",
		url: "https://www.funretrospectives.com/increment-by-one/",
		participants: 6,
		duration: 5,
	},
	{
		id: "2",
		name: "I went to the beach and took...",
		url: "https://www.funretrospectives.com/went-to-the-beach-and/",
		participants: 12,
		duration: 5,
	},
	{
		id: "3",
		name: "My first job",
		url: "https://www.funretrospectives.com/my-first-job/",
		participants: 8,
		duration: 10,
	},
	{
		id: "4",
		name: "The ball asks",
		url: "https://www.funretrospectives.com/the-ball-asks/",
		participants: 10,
		duration: 10,
	},
	{
		id: "5",
		name: "Shock wave",
		url: "https://www.funretrospectives.com/shock-wave/",
		participants: 6,
		duration: 12,
	},
	{
		id: "6",
		name: "Fun fact",
		url: "https://www.funretrospectives.com/fun-fact/",
		participants: 10,
		duration: 15,
	},
	{
		id: "7",
		name: "Your North",
		url: "https://www.funretrospectives.com/your-north/",
		participants: 9,
		duration: 10,
	},
	{
		id: "8",
		name: "Isn't that crazy",
		url: "https://www.funretrospectives.com/isnt-that-crazy/",
		participants: 8,
		duration: 12,
	},
	{
		id: "9",
		name: "Guess my favourite song",
		url: "https://www.funretrospectives.com/isnt-that-crazy/",
		participants: 6,
		duration: 12,
	},
	{
		id: "10",
		name: "Humna rock-paper-scissors",
		url: "https://www.funretrospectives.com/human-rock-paper-scissors/",
		participants: 7,
		duration: 10,
	},
	{
		id: "11",
		name: "Collaborative face drawing",
		url: "https://www.funretrospectives.com/collaborative-face-drawing/",
		participants: 4,
		duration: 5,
	},
	{
		id: "12",
		name: "Find your peers",
		url: "https://www.funretrospectives.com/find-your-peers/",
		participants: 10,
		duration: 12,
	},
	{
		id: "13",
		name: "Back to back",
		url: "https://www.funretrospectives.com/back-to-back/",
		participants: 10,
		duration: 15,
	},
	{
		id: "14",
		name: "Complex peers",
		url: "https://www.funretrospectives.com/complex-pieces/",
		participants: 10,
		duration: 5,
	},
	{
		id: "15",
		name: "Cardinal directions",
		url: "https://www.funretrospectives.com/cardinal-directions/",
		participants: 11,
		duration: 10,
	},
	{
		id: "16",
		name: "Peer introduction game",
		url: "https://www.funretrospectives.com/peer-introduction-game/",
		participants: 12,
		duration: 15,
	},
	{
		id: "17",
		name: "Untangle yourselves",
		url: "https://www.funretrospectives.com/untangle-yourselves/",
		participants: 9,
		duration: 10,
	},
	{
		id: "18",
		name: "Punctual Paulo",
		url: "https://www.funretrospectives.com/punctual-paulo/",
		participants: 11,
		duration: 16,
	},
	{
		id: "19",
		name: "Visual phone",
		url: "https://www.funretrospectives.com/visual-phone/",
		participants: 16,
		duration: 20,
	},
	{
		id: "20",
		name: "Geographical location",
		url: "https://www.funretrospectives.com/geographic-location/",
		participants: 10,
		duration: 12,
	},
];
const router = new Router();


router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});
router.get("/energisers", (req, res) => {
	res.json(energisers);
});
router.get("/energisers/:id", (req, res) => {
	let energiserId = req.params.id;
	const foundEnegiser = energisers.find((energiser) => energiser.id === energiserId);
	res.json(foundEnegiser);
});

export default router;
