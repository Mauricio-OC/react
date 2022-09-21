import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

it('testa component header', () => {
  renderWithRouter(<NotFound />);
  const header = screen.getByText('Page requested not found');
  expect(header).toBeInTheDocument();
});

it('testa imagem notfound do pikachu', () => {
  const texto = 'Pikachu crying because the page requested was not found';
  const src = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  renderWithRouter(<NotFound />);
  const image = screen.queryByAltText(texto);
  expect(image).toBeInTheDocument();
  expect(image.src).toEqual(src);
});
