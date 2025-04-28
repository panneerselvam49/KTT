const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  host: '127.0.0.1',
  dialect: 'postgres',
  username: 'postgres',  
  password: 'Paneer@123',  
  database: 'postgres',  
  logging: false,           
});

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => console.log("Error syncing database: ", err));

module.exports = { User, sequelize };
