// Imports
import { GraphQLString, GraphQLInt } from 'graphql' // Importing data types?

// App Imports
import { UserType } from './types'  // Imports UserType from types
import { create, remove } from './resolvers' // Imports the create and remove function from resolvers

// Create
export const userSignup = { // Not sure here. Are args being set or is this saying that these args must be present to sign up?
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create // runs the create action in resolvers to error check and create user
}

// Remove
export const userRemove = { // Not sure here. Are args being set or is this saying that id must be present to remove?
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove // runs the create action in resolvers to error check and remove user
}
