'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('activities', 'image', {
          type: Sequelize.TEXT,
          allowNull: true,
      })
  ])
},

down: (queryInterface, Sequelize) => {
  return Promise.all([
      queryInterface.changeColumn('activities', 'image', {
          type: Sequelize.STRING,
          allowNull: true,
      })
  ])
}
};