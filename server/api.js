import { Router } from "express";
import query from "./db";

const router = new Router();

router.get("/energisers", (_, res) => {
	query
		.query("select * from energisers")
		.then((result) => res.json(result.rows))
		.catch((err) => console.error(err));
});

router.get("/energisers/:id", (req, res) => {
	let energiserId = req.params.id;
	query
		.query("select * from energisers where id = $1", [energiserId])
		.then((result) => res.json(result.rows))
		.catch((err) => console.error(err));
});

// POST a new energiser from this route "/publish".
router.post("/publish", (req, res) => {
	const newEnergiserName = req.body.name;
	const newEnergiserDescription = req.body.description;
	const newEnergiserParticipants = req.body.participants;
	const newEnergiserDuration = req.body.duration;
	const newEnergiserCategory = req.body.category;
	const newEnergiserInstructions = req.body.instructions;
	const newEnergiserVotes = 0;
	const insertPost = "INSERT INTO energisers (name, description, participants, duration, votes, instructions,category) VALUES ($1, $2, $3, $4, $5, $6, $7);";
	query
		.query(insertPost, [newEnergiserName, newEnergiserDescription, newEnergiserParticipants, newEnergiserDuration, newEnergiserVotes, newEnergiserInstructions,newEnergiserCategory])
		.then(() => res.status(200).send("Energiser Published"))
		.catch((error) => console.error(error));
});

// POST feedback from this route "/feedback".
router.post("/feedback", (req, res) => {
	const name = req.body.name;
	const suggestion = req.body.suggestions;
	const feedbackQuery = "INSERT INTO feedback (name, suggestion) VALUES ($1, $2);";
	query
		.query(feedbackQuery, [name, suggestion])
		.then(() => res.status(200).send("Feedback Sent"))
		.catch((error) => console.error(error));
});
export default router;
