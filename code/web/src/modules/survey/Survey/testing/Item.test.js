import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Item from '../Item';
import { Provider } from 'react-redux';
import { store } from '../../../../setup/store';

describe('Survey Page', () => {
  let image, item;
  beforeEach(() => {
    item = {
      image: "image.jpg",
      score: 9,
    }; 
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Item item={item} />
        </MemoryRouter>
      </Provider>
    )
    image = screen.getByRole("img") 
  })

  it('should display the survey item', () => {
    expect(image).toHaveAttribute("src", "image.jpg")
  })
  
  it('should change border color on click', () => {
    userEvent.click(image)
    const clickedImage = screen.getByRole("img")
    expect(clickedImage).toHaveStyle({borderColor: "#CE9FFC"})
  })
})