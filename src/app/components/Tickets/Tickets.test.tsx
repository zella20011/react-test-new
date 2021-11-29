import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tickets from './Tickets';

describe('<Tickets />', () => {
  test('it should mount', () => {
    render(<Tickets />);
    
    const tickets = screen.getByTestId('Tickets');

    expect(tickets).toBeInTheDocument();
  });
});