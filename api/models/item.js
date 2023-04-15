'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.user)
      item.belongsTo(models.brand)
    }
  }
  item.init({
    name: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message:'name should not empty'
        }
      }
    },
    image: {
      type:DataTypes.STRING,
      defaultValue:"http://localhost:3000/api/items/images/defaultImageItem.png"
    },
    receiving: DataTypes.STRING,
    category: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    editRequest: {
      type: DataTypes.STRING,
      defaultValue: 'No Request'
    }
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};