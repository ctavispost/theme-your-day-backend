'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class activity extends Model {
        static associate(models) {
            models.activity.belongsToMany(models.theme, {
                through: 'themeActs'
            });
            models.activity.hasMany(models.userAct, {
                foreignKey: 'id'
            });
        }
    }

    activity.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
        themeId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'activity',
    });

    return activity;
}