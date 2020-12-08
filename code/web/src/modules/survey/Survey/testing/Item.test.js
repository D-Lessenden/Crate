import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Item from '../Item';

describe('Survey Page', () => {
  let image, item;
  beforeEach(() => {
    item = {
      image: "image.jpg",
      score: 9,
    }; 
    render(
      <MemoryRouter>
        <Item item = { item }/>
      </MemoryRouter>
    )
    image = screen.getByRole("img") 
  })

  it('should display the survey item', () => {
    expect(image).toHaveAttribute("src", "image.jpg")
  })
  
  it('should change border color on click', () => {
    userEvent.click(image)
    expect(image).toHaveStyle({borderColor: "#CE9FFC"})
  })
  
})
