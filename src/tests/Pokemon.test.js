import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon', () => {
  test('Testa renderizacao do card pokemon', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    const altText = 'Pikachu is marked as favorite';
    const starIcon = '/star-icon.svg';
    userEvent.click(details);
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);
    const icon = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(icon).toHaveAttribute('src', starIcon);
    expect(icon).toHaveAttribute('alt', altText);
  });
  test('Testa redirecionamento de link na aplicacao;', () => {
    renderWithRouter(<App />);
    const src = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const pokemonSrc = screen.getByRole('img', { name: /pikachu sprite/i });
    const sprite = 'Pikachu sprite';
    const details = screen.getByRole('link', { name: /more details/i });
    const pokemon = screen.getByTestId('pokemon-type');
    userEvent.click(details);
    expect(pokemonSrc).toHaveAttribute('src', src);
    expect(pokemonSrc).toHaveAttribute('alt', sprite);
    expect(pokemon).toHaveTextContent(/electric/i);
  });
  test('Testa se a URL exibida no navegador muda', () => {
    renderWithRouter(<App />);
    const src = screen.getByRole('link', { name: /more details/i });
    expect(src).toHaveAttribute('href', '/pokemons/25');
  });
});
