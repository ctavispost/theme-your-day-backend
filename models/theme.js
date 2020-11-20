'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class theme extends Model {
        static associate(models) {
            models.theme.hasMany(models.activity, {
                through: 'themeActs'
            });
        }
    }

    theme.init({
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'theme',
    });

    return theme;
}