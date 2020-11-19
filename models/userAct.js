'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class userAct extends Model {
        static associate(models) {
            models.userAct.belongsTo(models.activity);
            models.userAct.belongsTo(models.user);
        }
    }

    userAct.init({
        id: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        actId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'userAct',
    });

    return userAct;
}