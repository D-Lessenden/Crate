import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import Item from '../Item.js'
import { store } from '../../../../setup/store'

describe('Survey List', () => {
  let history, item;  
  beforeEach(() => {
    item = {
      image:"image1.jpg",
      score:1,
    }
    history = createMemoryHistory()
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Item item={item} page={1} />
         </MemoryRouter>
      </Provider>
    )
  })
  
  it('should display an item', () => {
    expect(screen.getByAltText('image1.jpg')).toBeInTheDocument()
  })
});