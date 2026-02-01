const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",   // 🔥 yahi fix hai (hardcode)
    logging: false
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected");
  } catch (error) {
    console.error("Unable to connect to DB:", error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
