'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  }
  User.init({
    fname: DataTypes.STRING,
    emp2det: DataTypes.STRING,
    emp3det: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};