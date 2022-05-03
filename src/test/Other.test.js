import React, { useState } from 'react';
import { render, fireEvent, screen, renderHook } from '@testing-library/react';
import { NameForm } from '../components/Form'
import userEvent from '@testing-library/user-event';

describe('checkbox', () => {
    it('checkbox checked', () => {
        const handleChanger = jest.fn()
        const { container } = render(<input type='checkbox' onChange={handleChanger} />);
        const checkbox = container.firstChild;
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(handleChanger).toHaveBeenCalledTimes(1);
    });

    it('input text focus', () => {
        render(<input type='text' data-testid="simple-input" />);
        const textInput = screen.getByTestId('simple-input');
        expect(textInput).not.toHaveFocus();
        textInput.focus();
        expect(textInput).toHaveFocus();
    });

    it('test user event', () => {
        render(<NameForm />)
        const text = ['Hello', 'World', 'there', 'other']
        text.forEach(item => {
            userEvent.type(screen.getByRole('textbox'), "item")
            fireEvent.click(screen.getByRole('button'))
        })
        const listitem = screen.getAllByRole('listitem')

        expect(listitem).toHaveLength(text.length)

    })
});
