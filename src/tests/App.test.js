import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('link', {
    name: /home/i,
  });
  const about = screen.getByRole('link', {
    name: /about/i,
  });
  const favoritePokemons = screen.getByRole('link', {
    name: /favorite pokémons/i,
  });
  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(favoritePokemons).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial, na URL home', () => {
  const { history } = renderWithRouter(<App />);
  const { location: { pathname } } = history;
  const homeLink = screen.getByRole('link', {
    name: /home/i,
  });
  userEvent.click(homeLink);
  expect(pathname).toBe('/');
});

test('Teste se a aplicação é redirecionada para a página de About ao clicar', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', {
    name: /about/i,
  });
  userEvent.click(aboutLink);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/about');
});

test('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados', () => {
  const { history } = renderWithRouter(<App />);
  const favoritePokemons = screen.getByRole('link', {
    name: /favorite pokémons/i,
  });
  userEvent.click(favoritePokemons);
  const { location: { pathname } } = history;
  expect(pathname).toBe('/favorites');
});

test('Teste se a aplicação é redirecionada para a página Not Found', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('/pagina-desconhecida-muahaha');
  });
  const notFound = screen.getByRole('heading', {
    name: /page requested not found/i,
  });
  expect(notFound).toBeInTheDocument();
});
