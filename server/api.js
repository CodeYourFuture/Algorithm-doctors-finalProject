import { Router } from "express";
const energisers = require("./energiser.json");


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
