const express = require("express");
const Leagues = require("../controllers/leagues");
const router = express.Router();

router.get("/filter/:query", function (req, res) {
  return Leagues.filter(req, res, req.db);
});

router.get("/:id/teams", function (req, res) {
  return Leagues.teams(req, res, req.db);
});

module.exports = router;
