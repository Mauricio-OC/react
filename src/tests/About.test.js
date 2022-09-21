import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

test('Teste se a página contém um header do componente About Pokédex', () => {
  renderWithRouter(<About />);
  const header = screen.getByRole('heading', {
    name: /about pokédex/i,
  });
  expect(header).toBeInTheDocument();
});
test('testando os parágrafos sobre pokedex', () => {
  renderWithRouter(<About />);
  const paragrafo1 = screen.getByText(/This application simulates a Pokédex/i);
  const paragrafo2 = screen.getByText(/One can filter Pokémons by type/i);
  expect(paragrafo1).toBeInTheDocument();
  expect(paragrafo2).toBeInTheDocument();
});
test('testando imagem about', () => {
  renderWithRouter(<About />);
  const img = screen.getByRole('img', {
    name: /pokédex/i,
  });
  expect(img).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
