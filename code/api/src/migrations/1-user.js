// migration for user. how the table is structured
module.exports = {
  up: (queryInterface, Sequelize) => {
    // The up method is called when migrating “up” the database – forward in time
    // the up method is a set of directions for running a migration,
    return queryInterface.createTable('users', {
      //  builds a user table with the following:
      id: {
        allowNull: false,
        // nil is not allowed
        autoIncrement: true,
        // IDs are incremented (i.e 1, 2, 3 etc)
        primaryKey: true,
        // the prim. key is the ID
        type: Sequelize.INTEGER
        // data type is an int
      },
      name: {
        type: Sequelize.STRING
        // datatype is a string
      },
      email: {
        type: Sequelize.TEXT
        // datatype is a string
      },
      password: {
        type: Sequelize.TEXT
      },
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
    // down method is called when migrating “down” the database – or, back in time.
    // the down method is a set of instructions for reverting a migratio
    return queryInterface.dropTable('users');
  }
}
