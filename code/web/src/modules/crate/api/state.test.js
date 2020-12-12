import '@testing-library/jest-dom';
import {
  CRATES_GET_LIST_REQUEST,
  CRATES_GET_LIST_RESPONSE,
  CRATES_GET_LIST_FAILURE,
  CRATES_GET_REQUEST,
  CRATES_GET_RESPONSE,
  CRATES_GET_FAILURE,
} from './actions'

import * as crateReducers from './state'

describe('', () => {
  let mockState, mockCrates;
  beforeEach(() => {
    mockState = {};
    mockCrates = [
      {
        id:1,
        name:"Clothes for Men",
        description:"A monthly supply of trendy clothes for men.",
        createdAt:"1607745183891",
        updatedAt:"1607745183891"
      }
    ] 
  })

  it('should store crates items', () => {
    const mockGetCrates = {
      type:  CRATES_GET_LIST_RESPONSE,
      error: null,
      isLoading: false,
      list: [
        {
          id:1,
          name:"Clothes for Men",
          description:"A monthly supply of trendy clothes for men.",
          createdAt:"1607745183891",
          updatedAt:"1607745183891"
        }
      ]
    }
    const expectedCrates = {
      error: null,
      isLoading: false,
      list: [
        {
          id:1,
          name:"Clothes for Men",
          description:"A monthly supply of trendy clothes for men.",
          createdAt:"1607745183891",
          updatedAt:"1607745183891"
        }
      ]
    }
    expect(crateReducers.crates({}, mockGetCrates)).toEqual(expectedCrates)
  })
});