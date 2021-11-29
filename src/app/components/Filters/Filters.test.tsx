import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filters from './Filters';

describe('<Filters />', () => {
  test('it should mount', () => {
    render(<Filters />);
    
    const filters = screen.getByTestId('Filters');

    expect(filters).toBeInTheDocument();
  });
});