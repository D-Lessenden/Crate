import React from 'react';
import { getAllByRole, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../../setup/store';
import List from '../List.js'
import * as actions from '../../api/actions'

jest.mock('../../api/actions')

describe('Survey List', () => {
  let items;

  beforeEach(() => {
    
  })

  it('should display the survey items', async () => {
    // getSurveyItemsFromAPI.mockResolvedValue(
    //   {
    //     status: 200,
    //     data: {
    //       data: [ 
    //         {
    //           image:"image1.jpg",
    //           score:1,
    //         },
    //         {
    //           image:"image2.jpg",
    //           score:2,
    //         }
    //       ]
    //     }
    //   }
    // )

    actions.getSurveyItems = jest.fn(() => {
      return dispatch => {
        dispatch({
          type: 'Survey/GET_ITEMS_RESPONSE',
          error: null,
          isLoading: false,
          surveyItems: [ 
            {
              image:"image1.jpg",
              score:1,
            },
            {
              image:"image2.jpg",
              score:2,
            }
          ]
        })
      }
    })
    console.log(actions)
    console.log(actions.getSurveyItems)
    // getSurveyItems.mockResolvedValue(
    //   dispatch => {
    //     dispatch({
    //       type: SURVEY_GET_ITEMS_RESPONSE,
    //       error: null,
    //       isLoading: false,
    //       surveyItems: response.data.data.surveyItems,
    //     })
    //   }
    // }
    
    render(
      <Provider store={store} key="provider">
        <MemoryRouter>
          <List/>
         </MemoryRouter>
      </Provider>
    )
    await waitFor(expect(screen.getByTestId('loading')).toBeInTheDocument())
    await waitFor(expect(screen.getByTestId('loading')).toNotBeInTheDocument())
  })
})

// expect(items[0]).toHaveAttribute('src', "image1.jpg")
//     expect(items[1]).toHaveAttribute('src', "image2.jpg")