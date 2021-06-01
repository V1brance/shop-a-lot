const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Backpack extends Model {}

Backpack.init(
  {
    // Model attributes are defined here
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Backpack", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(User === sequelize.models.Backpack); // true
module.exports = Backpack;
