// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// Crates All
// This acts as a GET request, pulls in all existing crates
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
    // this returns the results ordered by a field ie ASC/DESC
  },
  resolve: getAll
  // gets crates resolver method from resolver.js
}

// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
  // takes argument of the crate ID
  // returns a single crate that matches ID 
}
