const express = require("express");
const Teams = require("../controllers/teams");
const router = express.Router();

router.get("/:id/players", function (req, res) {
  const db = req.db;
  return Teams.players(req, res, db);
});

module.exports = router;
