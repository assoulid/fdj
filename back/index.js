function server() {
  const express = require("express");
  const { ObjectId } = require("mongodb");
  const app = express();
  const config = require("./config");

  const MongoClient = require("mongodb").MongoClient;
  const dbName = config.development.database.db;
  let db;

  MongoClient.connect(config.development.database.host, function (err, client) {
    // console.log("Connected successfully to server");
    db = client.db(dbName);
  });

  app.get("/", (req, res) => {
    res.send("Welcome");
  });

  /**
   * @api {get} /leagues/filter/:query Search Leagues by name
   * @apiName Search leagues
   * @apiGroup Leagues
   *
   * @apiParam {String} query Query filter.
   *
   * @apiSuccess {Object[]} leagues       Leagues.
   * @apiSuccess {String} leagues._id     Id of the Leagues.
   * @apiSuccess {String} leagues.name    Name of the League.
   * @apiSuccess {String} leagues.sport   Sport of the League.
   * @apiSuccess {String[]} leagues.teams Teams of the League.
   */
  app.get("/api/leagues/filter/:query", async (req, res) => {
    const query = req.params.query;
    const regex = RegExp(".*" + query + ".*");
    try {
      const docs = await db
        .collection("leagues")
        .find({ name: { $regex: regex, $options: "i" } })
        .toArray();
      res.status(200).json(docs);
    } catch (err) {
      console.log(err);
      throw err;
    }
  });

  /**
   * @api {get} /leagues/:id/teams Fetch Teams of a League
   * @apiName Fetch teams
   * @apiGroup Leagues
   *
   * @apiParam {String} id Id of the league.
   *
   * @apiSuccess {String} _id                    Id of the League.
   * @apiSuccess {Object[]} leagueTeams         Teams of the League.
   * @apiSuccess {String} leagueTeams.name      Name of the Team.
   * @apiSuccess {String} leagueTeams.thumbnail Thumbnail of the Team.
   */
  app.get("/api/leagues/:id/teams", async (req, res) => {
    const id = req.params.id;

    if (ObjectId.isValid(id)) {
      try {
        const docs = await db
          .collection("leagues")
          .aggregate([
            {
              $match: {
                _id: new ObjectId(id),
                // teams: { $exists: true, $not: { $size: 0 } }, // works in Studio 3T but not here...
              },
            },
            { $unwind: { path: "$teams", preserveNullAndEmptyArrays: true } },
            {
              $lookup: {
                from: "teams",
                localField: "teams",
                foreignField: "_id",
                as: "leagueTeams",
              },
            },
            {
              $unwind: {
                path: "$leagueTeams",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $group: {
                _id: "$_id",
                leagueTeams: {
                  $push: {
                    _id: "$leagueTeams._id",
                    name: "$leagueTeams.name",
                    thumbnail: "$leagueTeams.thumbnail",
                  },
                },
              },
            },
          ])
          .toArray();

        if (docs.length > 0) {
          res.status(200).json(docs[0]);
        }
      } catch (err) {
        console.log(err);
        throw err;
      }
    } else {
      throw new Error("Invalid id");
    }
  });

  /**
   * @api {get} /teams/:id/players Fetch Players of a Team
   * @apiName Fetch Players
   * @apiGroup Teams
   *
   * @apiParam {String} id Id of the Team.
   *
   * @apiSuccess {String} _id                            Id of the Team.
   * @apiSuccess {Object[]} teamPlayers                  Teams of the Team.
   * @apiSuccess {String} teamPlayers.name               Name of the Player.
   * @apiSuccess {String} teamPlayers.position           Position of the Player.
   * @apiSuccess {String} teamPlayers.thumbnail          Thumbnail of the Player.
   * @apiSuccess {Object[]} teamPlayers.signin           Signin of the Player.
   * @apiSuccess {Integer} teamPlayers.signin.amount     Amount of the Signin.
   * @apiSuccess {String} teamPlayers.signin.currency    Currency of the Signin.
   * @apiSuccess {String} teamPlayers.born               Born of the Player.
   */
  app.get("/api/teams/:id/players", async (req, res) => {
    const id = req.params.id;

    if (ObjectId.isValid(id)) {
      try {
        const docs = await db
          .collection("teams")
          .aggregate([
            {
              $match: {
                _id: new ObjectId(id),
                // players: { $exists: true, $not: { $size: 0 } }, // works in Studio 3T but not here...
              },
            },
            { $unwind: { path: "$players", preserveNullAndEmptyArrays: true } },
            {
              $lookup: {
                from: "players",
                localField: "players",
                foreignField: "_id",
                as: "teamPlayers",
              },
            },
            {
              $unwind: {
                path: "$teamPlayers",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $group: {
                _id: "$_id",
                name: { $first: "$name" },
                teamPlayers: {
                  $push: {
                    name: "$teamPlayers.name",
                    position: "$teamPlayers.position",
                    thumbnail: "$teamPlayers.thumbnail",
                    signin: "$teamPlayers.signin",
                    born: "$teamPlayers.born",
                  },
                },
              },
            },
          ])
          .toArray();

        if (docs.length > 0) {
          res.status(200).json(docs[0]);
        }
      } catch (err) {
        console.log(err);
        throw err;
      }
    } else {
      throw new Error("Invalid id");
    }
  });

  app.listen(config.development.server.port, () => {
    console.log(`Server listening on port ${config.development.server.port}`);
  });
}

module.exports = {
  server: server,
};
