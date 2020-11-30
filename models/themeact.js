'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class themeAct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  themeAct.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    themeId: DataTypes.INTEGER,
    actId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'themeAct',
  });
  return themeAct;
};