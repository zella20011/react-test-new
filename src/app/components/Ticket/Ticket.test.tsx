import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Ticket from './Ticket';

describe('<Ticket />', () => {
  test('it should mount', () => {
    render(<Ticket />);
    
    const ticket = screen.getByTestId('Ticket');

    expect(ticket).toBeInTheDocument();
  });
});