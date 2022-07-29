const sequelize = require("sequelize");
const User = require("../models/users.js");
const { DataTypes, Model } = sequelize;
const iSequelize = require("../config/sequelize.js");

class Post extends Model {}
Post.init(
  {
    
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    sequelize: iSequelize,
  }
);
User.hasMany(Post);
Post.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
});
module.exports = Post;
