const { ObjectId } = require("mongodb");

/**
 * @api {get} /teams/:id/players Fetch Players of a Team
 * @apiName Fetch Players
 * @apiGroup Teams
 *
 * @apiParam {String} id Id of the Team.
 *
 * @apiSuccess {String} _id                          Id of the Team.
 * @apiSuccess {Object[]} teamPlayers                Teams of the Team.
 * @apiSuccess {String} teamPlayers.name             Name of the Player.
 * @apiSuccess {String} teamPlayers.position         Position of the Player.
 * @apiSuccess {String} teamPlayers.thumbnail        Thumbnail of the Player.
 * @apiSuccess {Object[]} teamPlayers.signin         Signin of the Player.
 * @apiSuccess {Integer} teamPlayers.signin.amount   Amount of the Signin.
 * @apiSuccess {String} teamPlayers.signin.currency  Currency of the Signin.
 * @apiSuccess {String} teamPlayers.born             Born of the Player.
 */
exports.players = async function (req, res, db) {
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
};
