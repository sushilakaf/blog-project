const sequelize = require("sequelize");
const { DataTypes, Model } = sequelize;
const iSequelize = require("../config/sequelize.js");
class User extends Model {}
User.init(
  {
    fullName: DataTypes.STRING,
    // userRole: DataTypes.ENUM("user", "Admin"),

    email: {
      type: DataTypes.STRING,
      unique: [true, "email already exists in database!"],
      lowercase: true,
      trim: true,
      required: [true, "email not provided"],
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    },
  },

  {
    sequelize: iSequelize,
  }
);
module.exports = User;
