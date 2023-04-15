'use strict';
const {encryptPwd} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.item)
    }
  }
  user.init({
    username: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"username shouldn't empty"
        }
      }
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: {
      type: DataTypes.STRING,
      defaultValue:"http://localhost:3000/api/users/photos/defaultPhotoProfile.png"
    },
    status: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:function(user, options){
        user.password = encryptPwd(user.password)
      },
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};