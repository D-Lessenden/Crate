module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('products', 'score', {
    	    type: Sequelize.ARRAY(Sequelize.INTEGER)
        });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('products', 'score');
    }
  }
  