import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Item from '../Item';
import { Provider } from 'react-redux';
import { SURVEY_GET_ITEMS_RESPONSE, ITEM_SELECT, ITEM_DESELECT } from '../../api/actions'
import { store } from '../../../../setup/store';

import * as surveyReducers from '../../api/state'



describe('', () => {
  let mockState, mockSurveyItems;
  beforeEach(() => {
    mockState = [];
    mockSurveyItems = [
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

  it('should store survey items', () => {
    const mockGetSurveyItems = {
      type: SURVEY_GET_ITEMS_RESPONSE,
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
    }
    expect(surveyReducers.surveyItems({}, mockGetSurveyItems)).toEqual({ "error": null, "isLoading": false, "surveyItems": mockSurveyItems })
  })

  it('should store selected items', () => {
    const mockUpdateSelectedItems = {
      type: ITEM_SELECT,
      item: {
        image:"image1.jpg",
        score:1,
      }
    }
    let mockState = { 
      selectedItems: [] 
    }
    expect(surveyReducers.selectedItems(mockState, mockUpdateSelectedItems)).toEqual({ selectedItems: [mockSurveyItems[0]] })
  })
  it('should remove selected items', () => {
    const mockUpdateSelectedItems = {
      type: ITEM_DESELECT,
      item: {
        image:"image2.jpg",
        score:2,
      }
    }
    let mockState = { 
      selectedItems: [
        {
          image:"image1.jpg",
          score:1,
        },
        {
          image:"image2.jpg",
          score:2,
        }
      ] 
    }
    expect(surveyReducers.selectedItems(mockState, mockUpdateSelectedItems)).toEqual({ selectedItems: [mockSurveyItems[0]] })
  })
})