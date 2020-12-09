// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// Product type
const SurveyType = new GraphQLObjectType({
  name: 'survey',
  description: 'Survey Type',

  fields: () => ({
    id: { type: GraphQLInt },
    type: { type: GraphQLString },
    image: { type: GraphQLString },
    score: { type: new GraphQLList(GraphQLInt) },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})


export { SurveyType }
