'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userAct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userAct.init({
    userId: DataTypes.INTEGER,
    actId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userAct',
  });
  return userAct;
};