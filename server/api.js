import {
	Router,
} from "express";
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
	if (!energiserId) {
		return res.status(400).send("Invalid energiser Id");
	} else {
		query
			.query("select * from energisers where id = $1", [energiserId])
			.then((result) => res.json(result.rows))
			.catch((err) => console.error(err));
	}
});

// POST a new energiser from this route "/publish".
router.post("/publish", (req, res) => {
	const newEnergiserName = req.body.name;
	const newEnergiserDescription = req.body.description;
	const newEnergiserParticipants = req.body.participants;
	const newEnergiserDuration = req.body.duration;
	const newEnergiserType = req.body.type;
	const newEnergiserInstructions = req.body.instructions;
	const newUserId = req.body.googleId;
	const insertPost =
		"INSERT INTO energisers (name, description, participants, duration, instructions,type,publisher) VALUES ($1, $2, $3, $4, $5, $6, $7);";
	if (
		!newEnergiserName ||
		!newEnergiserDescription ||
		!newEnergiserParticipants ||
		!newEnergiserDuration ||
		!newEnergiserType ||
		!newEnergiserInstructions ||
		!newUserId
	) {
		return res.status(400).send("Some Missing Info");
	} else {
		query
			.query(insertPost, [
				newEnergiserName,
				newEnergiserDescription,
				newEnergiserParticipants,
				newEnergiserDuration,
				newEnergiserInstructions,
				newEnergiserType,
				newUserId,
			])
			.then(() => res.status(200).send("Energiser Published"))
			.catch((error) => console.error(error));
	}
});

// POST feedback from this route "/feedback".
router.post("/feedback", (req, res) => {
	const name = req.body.name;
	const suggestion = req.body.suggestions;
	const feedbackQuery =
		"INSERT INTO feedback (name, suggestion) VALUES ($1, $2);";
	if (!name || !suggestion) {
		return res.status(400).send("Invalid user");
	} else {
		query
			.query(feedbackQuery, [name, suggestion])
			.then(() => res.status(200).send("Feedback Sent"))
			.catch((error) => console.error(error));
	}
});

// POST rating  detail from this route "/rating".
router.post("/likes", (req, res) => {
	const id = req.body.id;
	const likes = req.body.voteStatus;
	const userId = req.body.userId;
	const checkExistingVote =
		"SELECT * FROM likes WHERE energiser_id = $1  AND user_id= $2 ;";
	query.query(checkExistingVote, [id, userId]).then((result) => {
		if (result.rows.length > 0) {
			const ratingUpdateQuery =
				"UPDATE likes SET like_status=$1 WHERE energiser_id=$2 AND  user_id= $3 ;";
			query
				.query(ratingUpdateQuery, [likes, id, userId])
				.then(() => res.status(200).send("vote updated"))
				.catch((error) => console.error(error));
		} else {
			const ratingQuery =
				"INSERT INTO likes (energiser_id, like_status, user_id) VALUES ($1, $2, $3);";
			query
				.query(ratingQuery, [id, likes, userId])
				.then(() => res.status(200).send("vote updated"))
				.catch((error) => console.error(error));
		}
	});
});

router.get("/likes", (req, res) => {
	let energiserId = req.query.id;
	let userId = req.query.user;
	if (!userId && !energiserId) {
		res.send("invalid login");
	} else {
		query
			.query(
				"SELECT like_status FROM likes WHERE energiser_id=$1 AND user_id=$2;",
				[energiserId, userId]
			)
			.then((result) => {
				res.json(result.rows);
			})
			.catch((err) => console.error(err));
	}
});

router.get("/star_ratings/:id", (req, res) => {
	let energiserId = req.params.id;
	if (!energiserId) {
		return res.status(400).send("Invalid energiser Id");
	} else {
		query
			.query("SELECT like_status FROM likes WHERE energiser_id=$1", [
				energiserId,
			])
			.then((result) => {
				if (result.rows.length >= 0) {
					res.json(result.rows);
				}
			})
			.catch((err) => console.error(err));
	}
});
//---------------------------------------

//get endpoint for comments

router.get("/comments", (req, res) => {
	let energiserId = req.query.id;
	let userId = req.query.user;
	if (!userId && !energiserId) {
		res.send("invalid login");
	} else {
		query
			.query(
				"SELECT message FROM comments WHERE energiser_id=$1 AND user_id=$2;",
				[energiserId, userId]
			)
			.then((result) => {
				res.json(result.rows);
			})
			.catch((err) => console.error(err));
	}
});

//POST endpoint for comments

router.post("/comments/:id", (req, res) => {
	const energiserId = req.params.id;
	const comments = req.body.comments;
	const userId = req.body.googleId;
	const commentQuery =
		"INSERT INTO comments (user_id, message, energiser_id) VALUES ($1, $2, $3) RETURNING *;";
	if (!comments) {
		return res.status(400).send("Invalid user");
	} else {
		query
			.query(commentQuery, [userId, comments, energiserId])
			.then(() => res.status(200).send("Comment Sent"))
			.catch((error) => console.error(error));
	}
});

export default router;