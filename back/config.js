const config = {
  development: {
    database: {
      host: "mongodb://localhost",
      port: "27017",
      db: "data",
    },
    server: {
      port: "8080",
    },
  },
};

module.exports = config;
