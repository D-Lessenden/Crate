// Imports
import axios from 'axios' // The library used for requests and responses
import { query, mutation } from 'gql-query-builder' // Library from original author of this project that includes templates for GraphQL

// App Imports
import { routeApi } from '../../../setup/routes' // Relative path to send our requests

// Actions Types
// Defining and exporting variables for our switch conditions for our reducers
export const CRATES_GET_LIST_REQUEST = 'CRATES/GET_LIST_REQUEST'
export const CRATES_GET_LIST_RESPONSE = 'CRATES/GET_LIST_RESPONSE'
export const CRATES_GET_LIST_FAILURE = 'CRATES/GET_LIST_FAILURE'
export const CRATES_GET_REQUEST = 'CRATES/GET_REQUEST'
export const CRATES_GET_RESPONSE = 'CRATES/GET_RESPONSE'
export const CRATES_GET_FAILURE = 'CRATES/GET_FAILURE'

// Actions

// Get list of crates
export function getList(orderBy = 'DESC', isLoading = true) {
  return dispatch => {
    // Sets state to loading until post resolves
    dispatch({
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading
    })
    // Gets our crates from the API
    return axios.post(routeApi, query({
      operation: 'crates',
      variables: { orderBy },
      fields: ['id', 'name', 'description', 'createdAt', 'updatedAt']
    }))
      .then(response => {
        if (response.status === 200) {
          // Set state to successful list response
          dispatch({
            type: CRATES_GET_LIST_RESPONSE,
            error: null,
            isLoading: false,
            list: response.data.data.crates
          })
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        // Set state to failed list response
        dispatch({
          type: CRATES_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single crate
export function get(slug, isLoading = true) {
  return dispatch => {
    // Sets state to isLoading until post resolves
    dispatch({
      type: CRATES_GET_REQUEST,
      isLoading
    })

    // Gets a crate from the API
    return axios.post(routeApi, query({
      operation: 'crate',
      variables: { slug },
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']
    }))
      .then(response => {
        // Set state to successful crate response
        dispatch({
          type: CRATES_GET_RESPONSE,
          error: null,
          isLoading: false,
          item: response.data.data.crate
        })
      })
      .catch(error => {
        // Set state to failed crate response
        dispatch({
          type: CRATES_GET_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Get single crate by Id
export function getById(crateId) {
  return dispatch => {
    // Gets a crate by Id
    return axios.post(routeApi, query({
      operation: 'crateById',
      variables: { crateId },
      fields: ['id', 'name', 'description']
    }))
  }
}

// Create or update crate
export function createOrUpdate(crate) {
  // If the crate exists update it
  if (crate.id > 0) {
    return update(crate)
  } else { // If the crate doesn't exist create it
    delete crate.id
    return create(crate)
  }
}

// Create crate
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({ // mutation template for GraphQL by original author 
      operation: 'crateCreate', // This will send the crateCreate operation to the back-end to create a new crate
      variables,
      fields: ['id']
    }))
  }
}

// Update crate
export function update(crate) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateUpdate', // This will send the crateUpdate operation to the back-end to update a crate
      variables: crate,
      fields: ['id']
    }))
  }
}

// Remove crate
export function remove(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateRemove', // This will send the crateRemove operation to the back-end to remove a crate
      variables,
      fields: ['id']
    }))
  }
}
