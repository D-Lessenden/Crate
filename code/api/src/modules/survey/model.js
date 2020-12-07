'use strict'

// Survey
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('surveys', {
    type: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.TEXT
    },
    score: {
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    }
  })
}
