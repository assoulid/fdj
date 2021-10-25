const { ObjectId } = require("mongodb");

/**
 * @api {get} /leagues/filter/:query Search Leagues by name
 * @apiName Search leagues
 * @apiGroup Leagues
 *
 * @apiParam {String} query Query filter.
 *
 * @apiSuccess {Object[]} leagues        Leagues.
 * @apiSuccess {String} leagues._id      Id of the Leagues.
 * @apiSuccess {String} leagues.name     Name of the League.
 * @apiSuccess {String} leagues.sport    Sport of the League.
 * @apiSuccess {String[]} leagues.teams  Teams of the League.
 */
exports.filter = async function (req, res, db) {
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
};

/**
 * @api {get} /leagues/:id/teams Fetch Teams of a League
 * @apiName Fetch teams
 * @apiGroup Leagues
 *
 * @apiParam {String} id Id of the league.
 *
 * @apiSuccess {String} _id                    Id of the League.
 * @apiSuccess {Object[]} leagueTeams          Teams of the League.
 * @apiSuccess {String} leagueTeams.name       Name of the Team.
 * @apiSuccess {String} leagueTeams.thumbnail  Thumbnail of the Team.
 */
exports.teams = async function (req, res, db) {
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
};
