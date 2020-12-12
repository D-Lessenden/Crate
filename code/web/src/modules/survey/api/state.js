// Imports

// Actions Types
import {
  SURVEY_GET_ITEMS_REQUEST,
  SURVEY_GET_ITEMS_RESPONSE,
  SURVEY_GET_ITEMS_FAILURE,
  ITEM_SELECT,
  ITEMS_DELETE,
  ITEM_DESELECT,
  NULL
} from './actions'

const surveyItemsInitialState = {
  isLoading: false,
  surveyItems: [],
  error: null,
}

export const surveyItems = (state = surveyItemsInitialState, action) => {
  switch (action.type){
    case SURVEY_GET_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null,
      }
    case SURVEY_GET_ITEMS_RESPONSE:
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
    case NULL:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null,
      }

      default:
        return state
  }
}

const selectedItemsInitialState = {
  selectedItems: {
    1:[],
    2:[],
    3:[],
    4:[]
  }
}

export const selectedItems = (state = selectedItemsInitialState, action) => {
  switch (action.type) {
    case ITEM_SELECT:
      return  {
        ...state,
        selectedItems: { ...state.selectedItems, [action.page]:[...state.selectedItems[action.page], action.item] }
      }
    case ITEM_DESELECT:
      const copyOfItems = state.selectedItems[action.page].concat()
      const indexToRemove = copyOfItems.findIndex(item => {
        return action.item === item
      })
      copyOfItems.splice(indexToRemove, 1)
      return {
        ...state, selectedItems: { ...state.selectedItems, [action.page]:copyOfItems }
      }
      case ITEMS_DELETE:
        return  {
          ...state,
          selectedItems: { ...state.selectedItems, [action.page]:[] }
        }
      default:
        return state
  }
}
