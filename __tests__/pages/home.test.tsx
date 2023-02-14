import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'

describe('Home', () => {
    test('renders heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            level: 2
        })
        // const heading = screen.getByRole('heading', {
        //     name: /Hello Next Test/i,
        // })

        expect(heading).toBeInTheDocument()

    })
})