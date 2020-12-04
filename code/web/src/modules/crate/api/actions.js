// Imports
import axios from 'axios'                           // async fetch library
import { query, mutation } from 'gql-query-builder' // graphQL interfacing templates

// App Imports
import { routeApi } from '../../../setup/routes'    // fetch url

// Actions Types
// Dispatch Typing Values / switch values
export const CRATES_GET_LIST_REQUEST = 'CRATES/GET_LIST_REQUEST'
export const CRATES_GET_LIST_RESPONSE = 'CRATES/GET_LIST_RESPONSE'
export const CRATES_GET_LIST_FAILURE = 'CRATES/GET_LIST_FAILURE'
export const CRATES_GET_REQUEST = 'CRATES/GET_REQUEST'
export const CRATES_GET_RESPONSE = 'CRATES/GET_RESPONSE'
export const CRATES_GET_FAILURE = 'CRATES/GET_FAILURE'

// Actions

// Get list of crates
// Default to descending, but actually set to ascending in the code
export function getList(orderBy = 'DESC', isLoading = true) {

  // return a function that takes a callback called displatch. dispatch controls the redux store
  return dispatch => {
    dispatch({
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading
    })

    // this is the fetch to server
    return axios.post(routeApi, query({
      operation: 'crates', // our endpoint
      variables: { orderBy },  // argument we pass
      fields: ['id', 'name', 'description', 'createdAt', 'updatedAt'] // tell graphQL what we want
    }))
      .then(response => {
        if (response.status === 200) {

          // redux - successful response
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

        // redux - sad path
        dispatch({
          type: CRATES_GET_LIST_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}


// Get single crate
// slug is a key-identifier for a certain crate
export function get(slug, isLoading = true) {

  // redux - isLoading
  return dispatch => {
    dispatch({
      type: CRATES_GET_REQUEST,
      isLoading
    })

    // fetch
    return axios.post(routeApi, query({
      operation: 'crate',  // our 'endpoint'
      variables: { slug }, // argument we pass
      fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt']   // tell graphQL what we want
    }))
      .then(response => {

        // redux happy path
        dispatch({
          type: CRATES_GET_RESPONSE,
          error: null,
          isLoading: false,
          item: response.data.data.crate
        })
      })
      .catch(error => {

        // redux sad path
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
    return axios.post(routeApi, query({
      operation: 'crateById',
      variables: { crateId },
      fields: ['id', 'name', 'description']
    }))
  }
}

// Create or update crate
export function createOrUpdate(crate) {
  if (crate.id > 0) {
    return update(crate)
  } else {
    delete crate.id
    return create(crate)
  }
}

// Create crate
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateCreate',
      variables,
      fields: ['id']
    }))
  }
}

// Update crate
export function update(crate) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateUpdate',
      variables: crate,
      fields: ['id']
    }))
  }
}

// Remove crate
export function remove(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'crateRemove',
      variables,
      fields: ['id']
    }))
  }
}
