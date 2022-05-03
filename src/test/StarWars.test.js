/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/await-async-utils */
/* eslint-disable testing-library/no-node-access */
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen } from '@testing-library/react';
import { StarWars } from '../components/StarWars'
import { mockData } from '../test/MockData'

let server  = setupServer(
  rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
    return res(ctx.json([mockData]))
  }),
)

describe('renders a book data', () => {

  console.log(server  )
      
      beforeAll(() => server.listen())
      afterAll(() => server.close())
      
      it('renders a book data2', async() => {
        server.use(
          rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
            return res(ctx.status(200), ctx.json([mockData]))
          }),
        )
        const result = render(<StarWars />)
        screen.debug()
        const spinner = result.container.querySelector('.spinner-undefined')
        expect(spinner).toBeInTheDocument()
        await waitFor(() => result.container.querySelector('.list-group-item'))
        screen.debug()
        expect(result.container.querySelectorAll('.list-group-item')).toHaveLength(10) 
  
      })

    it('renders a book data', () => {
      const result = render(<StarWars />)
      const spinner = result.container.querySelector('.spinner-undefined')
      expect(spinner).toBeInTheDocument()

    })
})

