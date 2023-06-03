const dbConfig = require("../configs/db.config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.chemicals = require("./chemical.model.js")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced...");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

module.exports = db;