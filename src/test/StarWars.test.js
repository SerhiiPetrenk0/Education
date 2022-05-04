import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react';
import { StarWars } from '../components/StarWars'
import { mockData } from './MockData'

const server = setupServer(
  rest.get('http://swapi.dev/api/people/', (req, res, ctx) => {
    return res(ctx.json(mockData))
  }),
)

describe('StarWars component', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render list', async () => {
    render(<StarWars />)
    await waitFor(() => {
      expect(screen.getByText(/Luke Skywalker/)).toBeInTheDocument()
    })
  })

  it('should render spinner', () => {
    render(<StarWars />)
    const spinner = screen.getByTestId('custom-element')
    expect(spinner).toBeInTheDocument()
  })
})

