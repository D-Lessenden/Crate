import React from 'react';
import { getAllByRole, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import List from '../List.js'

describe('Survey List', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
    surveyItems: {
      isLoading: false,
      surveyItems: [
        {
          image:"image1.jpg",
          score:1,
        }
      ],
      error: null,
    },
    selectedItems: {
      selectedItems: {
        1:[
          {
            image:"image2.jpg",
            score:2,
          }
        ],
        2:[],
        3:[],
        4:[]
      }
    }
  });

  store.dispatch = jest.fn()
  
  let history;
  
  beforeEach(() => {
    history = createMemoryHistory()
    render(
      <Provider store={store} key="provider">
        <Router history={history}>
          <List />
         </Router>
      </Provider>
    )
  })
  
  it('should display the survey items from the store', async () => {
    const renderedItem1 = await waitFor(() => screen.getByAltText('image1.jpg'))
    expect(renderedItem1).toBeInTheDocument()
  })
  
  it('should display a next button', () => {
    expect(screen.getByRole('button', { name: /Next/i })).toBeInTheDocument()
  })

  it('should have a back button', () => {
    expect(screen.getByRole('button', { name: /Back/i })).toBeInTheDocument()
  })
  
  it('next button should be disabled onload', () => {
    expect(screen.getByRole('button', { name: /Next/i })).toBeDisabled()
  })
})