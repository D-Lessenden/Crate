module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { // Migrate a user table to the db
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER //Give User a pk of id which assigns itself and cannot be null
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT    // I remember this from the exress lesson. Migrations have a happy/sad path which updates the db or rolls it back
      },                        // When we edit this file the up will most likely become the down
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users'); // This looks like the rollback for the db
  }
}
