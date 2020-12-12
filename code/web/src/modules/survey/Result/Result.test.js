import React from 'react';
import { getAllByRole, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Result from './Result.js'

describe('Result', () => {
  let history, mockStore;
  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
      selectedItems: {
        selectedItems: {
          1: [
            {
              image: "image1.jpg",
              score: [0,1]
            },
            {
              image: "image1.jpg",
              score: [1,0]
            }
          ],
          2: [],
          3: [],
          4: []
        }
      },
    })
    // store.getState = jest.fn(store)
    history = createMemoryHistory()
    render(
      <Provider store={store} key="provider">
        <Router history={history}>
          <Result />
         </Router>
      </Provider>
    )
  })

  it('should render a style title', () => {
    expect(screen.getByText('Your Style is Classic and Casual')).toBeInTheDocument()
  })

  it('should render style images', () => {
    expect(screen.getByTestId('women-style-image')).toBeInTheDocument()
    expect(screen.getByTestId('men-style-image')).toBeInTheDocument()
  })

  it('should ', () => {
    userEvent.click(screen.getByText("View Your Subscriptions"))
    expect(history.entries[1].pathname).toEqual('/user/subscriptions')
  })
})
