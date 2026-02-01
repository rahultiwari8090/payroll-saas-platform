const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2)
  },
  role: {
    type: DataTypes.ENUM("HR", "EMPLOYEE")
  }
});

module.exports = Employee;
