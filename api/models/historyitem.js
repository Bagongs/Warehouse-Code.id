'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historyItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      historyItem.belongsTo(models.item)
    }
  }
  historyItem.init({
    itemId: DataTypes.INTEGER,
    methodRequest: DataTypes.STRING,
    oldValue: DataTypes.STRING,
    newValue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'historyItem',
  });
  return historyItem;
};