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

export default router;
