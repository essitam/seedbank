const express = require("express");
const router = express.Router();
const knex = require("../../db/knex.js");

// GET api/events
router.get("/", (req, res) => {
	knex("events")
		.then(events => {
			res.send(events);
		})
		.catch(err => {
			console.log(err);
		});
});

// POST api/events
router.post("/", (req, res) => {
	knex("events")
		.insert({
			name: req.body.name,
			data: "{sponges: " + req.body.sponges.toString() + "}"
		})
		.catch(err => {
			console.log(err);
		});
});

//DELETE api/events

router.delete("/:id", (req, res) => {
	console.log("AAAAAAAAAA");
	//   const event = await knex.findById(req.params.id);

	let select = parseInt(req.params.id);
	console.log(select)
	knex("events")
		.where({
			id: select
		})
		.del()
		.catch(err => {
			res.status(500).json({
				status: 'Error :(',
				error: err
			})
		});
});

module.exports = router;