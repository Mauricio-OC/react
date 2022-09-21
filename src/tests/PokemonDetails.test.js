import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se as informações do pokémon selecionado são mostradas na tela', () => {
  test('testa componente header h2', () => {
    renderWithRouter(<App />);

    const header = screen.getByRole('link', { name: 'More details' });
    userEvent.click(header);

    const pokemon = screen.getByText(/pikachu details/i);
    expect(pokemon).toBeDefined();
    const summary = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(summary).toBeInTheDocument();
    const summaryText = screen.getByText(/This intelligent Pokémon/i);
    expect(summaryText).toBeInTheDocument();
    const locations = screen
      .getByRole('heading', { name: /Game Locations of Pikachu/i, level: 2 });
    expect(locations).toBeInTheDocument();
    const image = screen.getAllByRole('img', { name: 'Pikachu location' });
    const link1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const link2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(image[0].src).toBe(link1);
    expect(image[1].src).toBe(link2);
    const favorite = screen.getByText(/Pokémon favoritado?/i);
    expect(favorite).toBeInTheDocument();
  });
});
