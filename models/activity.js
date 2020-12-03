'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.activity.belongsToMany(models.theme, {
        through: 'themeActs'
      });
      models.activity.belongsToMany(models.user, {
        through: 'userAct'
      });
    }
  };
  activity.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    themeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'activity',
  });
  return activity;
};