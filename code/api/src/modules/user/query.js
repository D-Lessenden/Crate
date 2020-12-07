// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All. Gets all users from the DB. 
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID. Gets single user from the DB with ID as argument.
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Authorization when user is signing in. Must have three arguemtns.
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders. Returns list of user genders
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
