// Actions Types
import { SURVEY_GET_ITEMS_REQUEST, SURVEY_GET_ITEMS_RESPONSE, SURVEY_GET_ITEMS_FAILURE } from './actions'

const surveyItemsInitialState = {
  isLoading: false,
  surveyItems: [],
  error: null,
}

export const surveyItems = (state = surveyItemsInitialState, action) => {
  switch (action.type){
    case SURVEY_GET_ITEMS_REQUEST: 
    return {
      ...state, isLoading: action.isLoading,
      error: null,
    }
    case SSURVEY_GET_ITEMS_RESPONSE: 
    return {
      ...state, isLoading: false,
      error: action.error,
      surveyItems: action.surveyItems,
    }
    case SURVEY_GET_ITEMS_FAILURE: 
    return {
      ...state, isLoading: false,
      error: action.error,
    }
  }
}