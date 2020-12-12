// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const SURVEY_GET_ITEMS_REQUEST = 'Survey/GET_ITEMS_REQUEST'
export const SURVEY_GET_ITEMS_RESPONSE = 'Survey/GET_ITEMS_RESPONSE'
export const SURVEY_GET_ITEMS_FAILURE = 'Survey/GET_ITEMS_FAILURE'
export const ITEM_SELECT = 'Survey/ITEM_SELECT'
export const ITEMS_DELETE = 'Survey/ITEM_DELETE'
export const ITEM_DESELECT = 'Survey/ITEM_DESELECT'
export const NULL = 'NULL'

export const getSurveyItems = (clothingType) => {
  if (clothingType === null) return (dispatch) => dispatch({type: 'NULL',isLoading:true})
  return (dispatch) => {
    dispatch(
      {
        type: SURVEY_GET_ITEMS_REQUEST,
        error: null,
        isLoading: true,
      }
    )

    return axios.post(routeApi, query({
      operation:"getSurveyItems",
      variables: {
        type: clothingType
      },
      fields:["image", "score"]
    }))
    .then(response => {
      if (response.status === 200) {
        dispatch(
          {
            type: SURVEY_GET_ITEMS_RESPONSE,
            error: null,
            isLoading: false,
            surveyItems: response.data.data.getSurveyItems,
          }
        )
      } else {
        console.error('SURVEY ITEM RESPONSE ERROR')
      }
    })
    .catch(error => {
      dispatch({
        type: SURVEY_GET_ITEMS_FAILURE,
        error: "Something went wrong, try reloading the page",
        isLoading: false,
      })
    })
  }
}

export const updateSelectedItems = (item, willAdd, page) => {
  return (dispatch) => {
    dispatch(
      {
        type: willAdd ? ITEM_SELECT : ITEM_DESELECT,
        item,
        page
      }
    )
  }
}

export const deletePageSelections = (page) => {
  return (dispatch) => {
    dispatch(
      {
        type: ITEMS_DELETE,
        page
      }
    )
  }
}
