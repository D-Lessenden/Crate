import React from 'react';
import { getAllByRole, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from '../../api/actions'
jest.mock('../../api/actions')

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
    }
  });
  let items, history;

  beforeEach(() => {
    history = createMemoryHistory()
    
  })

  it('should display the survey items', async () => {
    
    actions.getSurveyItemsFromAPI = jest.fn(() => {
      return {
        status: 200,
        data: {
          data: [ 
            {
              image:"image1.jpg",
              score:1,
            }
          ]
        }
      }
    })

    render(
      <Provider store={store} key="provider">
        <Router history={history}>
          <List />
         </Router>
      </Provider>
    )
    
    const renderedItem1 = await waitFor(() => screen.getByAltText('image1.jpgalt_text'))
    expect(renderedItem1).toBeInTheDocument()
  })
})