const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");

const connection = require("../../config/connection");
const hashPassword = require("../../hooks/hashPassword");

class User extends Model {
  async checkPassword(userPassword) {
    const isValid = await bcrypt.compare(userPassword, this.password);
    return isValid;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 20],
      },
    },
  },
  {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
    hooks: {
      beforeCreate: hashPassword,
    },
  }
);

module.exports = User;
