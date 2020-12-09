// Imports
import { GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { SurveyType } from './types'
import { getItems } from './resolvers'

// getSurveyItems by type
export const getSurveyItems = {
  type: new GraphQLList(SurveyType),
  args: {
    type: { type: GraphQLString }
  },
  resolve: getItems
}
