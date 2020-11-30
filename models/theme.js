'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class theme extends Model {
        static associate(models) {
            models.theme.belongsToMany(models.activity, {
                through: 'themeActs'
            });
        }
    }

    theme.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'theme',
    });

    return theme;
}