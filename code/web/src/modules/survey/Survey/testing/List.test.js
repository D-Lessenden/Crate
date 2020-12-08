import React from 'react';
import { getAllByRole, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import List from '../List.js'
jset.mock('../../api/actions')

describe('Survey List', () => {
  let getSurveyItems, items;

  beforeEach(() => {
    getSurveyItems.mockResolvedValue([
      {
        image:"image1.jpg",
        score:1,
      },
      {
        image:"image2.jpg",
        score:2,
      }
    ])

    render(
      <MemoryRouter>
        <List/>
      </MemoryRouter>
    )
  })

  it('should display the survey items', () => {
    const items = screen.getAllByRole('img')
    expect(items[0]).toHaveAttribute('src', "image1.jpg")
    expect(items[1]).toHaveAttribute('src', "image2.jpg")
  })
  
})