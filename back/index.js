function server() {
  const express = require("express");
  const app = express();
  const config = require("./config");

  const leaguesRoutes = require("./routes/leagues");
  const teamsRoutes = require("./routes/teams");

  const MongoClient = require("mongodb").MongoClient;
  const dbName = config.development.database.db;
  let db;

  MongoClient.connect(config.development.database.host, function (err, client) {
    db = client.db(dbName);

    app.use(
      "/api/leagues",
      function (req, res, next) {
        req.db = db;
        next();
      },
      leaguesRoutes
    );

    app.use(
      "/api/teams",
      function (req, res, next) {
        req.db = db;
        next();
      },
      teamsRoutes
    );
  });

  app.listen(config.development.server.port, () => {
    console.log(`Server listening on port ${config.development.server.port}`);
  });
}

module.exports = {
  server: server,
};
