import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Notfound from '../pages/NotFound';

test('testa header do component', () => {
  renderWithRouter(<Notfound />);
  const heading = screen.getByRole('heading', { name: /page requested not found/i });
  expect(heading).toBeInTheDocument();
});
