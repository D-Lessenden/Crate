import '@testing-library/jest-dom';
import {
  SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE
} from './actions'

import * as subscriptionReducers from './state'

describe('', () => {
  it('should store crates items', () => {
    const mockGetSubscriptionsByUser = {
      type:  SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
      error: null,
      isLoading: false,
      list: [
        {
          id:1,
          user: {
            name:"testUser1",
            email:"testuser1@crate.com"
          },
          crate: {
            id: 1,
            name: "Clothes for Men",
            description: "A monthly supply of trendy clothes for men."
          },
          createdAt: "1607808308941"
        }
      ]
    }
    const expectedSubscriptions = {
      error: null,
      isLoading: false,
      list: [
        {
          id:1,
          user: {
            name:"testUser1",
            email:"testuser1@crate.com"
          },
          crate: {
            id: 1,
            name: "Clothes for Men",
            description: "A monthly supply of trendy clothes for men."
          },
          createdAt: "1607808308941"
        }
      ]
    }
    expect(subscriptionReducers.subscriptionsByUser({}, mockGetSubscriptionsByUser)).toEqual(expectedSubscriptions)
  })
});