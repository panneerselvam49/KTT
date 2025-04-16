// main.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "Paneer@123", {
  host: "127.0.0.1",
  dialect: "postgres",
  port: 5432
});
const UserModel = require("../models/user")(sequelize, DataTypes);

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connected to Postgres");

    const newUser = await UserModel.create({
      fname: "John Doe",
      eid:2,
      cname:"KTT"
    });

    console.log("🟢 New user added:", newUser.toJSON());
    const users = await UserModel.findAll();
    console.log("📋 All Users:");
    users.forEach(user => console.log(user.toJSON()));

  } catch (err) {
    console.error(" Error:", err);
  } finally {
    await sequelize.close();
  }
}

main();

//other way to create sequelize Sequelize.definr()

const { Sequelize, DataTypes } = require('sequelize');
const sequeliz = new Sequelize("postgres", "postgres", "Paneer@123", {
  dialect: 'postgers'
});

const Usr = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE
  }
}, {

});

module.exports = User;

//Main.intit() other way to create sequelize
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequeli = new Sequelize("postgres", "postgres", "Paneer@123", {
  dialect: 'postgres'
});

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:false,
  },
  id:{
    eid: DataTypes.NUMBER,
    exp: DataTypes.NUMBER,
    domain: DataTypes.STRING,
    unique: true,
    primaryKey:true,
    autoIncrement: true,
  },
  birthday: {
    type: DataTypes.DATE,
    unique:false,
    primaryKey:false,
  }
}, {
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We choose the name of the model
});

module.exports = User;

