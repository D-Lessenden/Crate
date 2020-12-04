// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
// import acts as 'require' in rails
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
  // schema contains queries and mutations
})

export default schema
