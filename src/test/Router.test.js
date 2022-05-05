// app.test.js
import {render, screen } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import React from 'react';
import {Router} from 'react-router-dom';
import '@testing-library/jest-dom';

import {CustomRouter, LocationDisplay} from '../components/Router';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <CustomRouter />
    </Router>,
  );
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  render(
    <Router location={history.location} navigator={history}>
      <CustomRouter />
    </Router>,
  );

  expect(screen.getByText(/no match/i)).toBeInTheDocument();
});

test('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory();
  const route = '/some-route';
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <LocationDisplay />
    </Router>,
  );

  expect(screen.getByTestId('location-display')).toHaveTextContent(route);
});
