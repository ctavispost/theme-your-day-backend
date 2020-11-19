'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class activity extends Model {
        static associate(models) {
            models.activity.belongsTo(models.theme);
            models.activity.hasMany(models.userAct, {
                foreignKey: 'id'
            });
        }
    }

    activity.init({
        id: DataTypes.INTEGER,
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