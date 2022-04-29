import React from "react";
import { render, screen } from "@testing-library/react";
import { NameForm } from '../components/Form';

describe('Form component', () => {
    test('should show login form', () => {
        render(<NameForm />)
        const inputs = screen.getByText(/SEND/i)
        expect(inputs).toBeInTheDocument()
    }) 
    test('should show textarea form', () => {
        render(<NameForm />)
        const textarea = screen.getByRole('textbox')
        fireEvent.change(textarea, {target: {value: 'Hello world'}})
        fireEvent(getByText(container, '/SEND/i'))
        screen.debug()
        expect(textarea).toBeInTheDocument()
    })
})
