const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "Paneer@123", {
  host: "127.0.0.1",
  dialect: "postgres",
  port: 5432
});

sequelize.authenticate()
  .then(() => console.log("✅ Connected to Postgres"))
  .catch(err => console.error("❌ Failed to connect:", err));
