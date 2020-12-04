'use strict'
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  Crate.associate = function(models) {
    // similar to rails' has_many and belongs_to, build relationships with other objects
    Crate.hasMany(models.Subscription)
    // crate has many Subscriptions, one to many relationship
  }

  return Crate
  // Does not have implicit return 
}
