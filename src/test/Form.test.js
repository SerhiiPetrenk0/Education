import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NameForm } from '../components/Form';

describe('Form component', () => {

    describe('Find in the Form', () => {
        beforeEach(() => {
            render(<NameForm />);
        });
        it('shauld to find a button', () => {
            const inputs = screen.getByText(/SEND/i);
            expect(inputs).toBeInTheDocument();
        }) ;
        it('shauld to find a textarea', () => {
            const textarea = screen.getByRole('textbox');
            expect(textarea).toBeInTheDocument();
        });
    });

    describe('Test textarea', () => {
        let textarea, button;
        
        beforeEach(() => {
            render(<NameForm />);
            textarea = screen.getByRole('textbox');
            button = screen.getByRole('button');
            fireEvent.change(textarea, {target: {value: 'Hello3453'}});
            fireEvent.click(button);
        });

        it('should to add a item', () => {
            fireEvent.change(textarea, {target: {value: ''}});
            expect(screen.getByText(/Hello3453/i)).toBeInTheDocument();
        });

        it('must check the number of items', () => {
            expect(screen.getAllByText(/Hello3453/i)).toHaveLength(2);
            fireEvent.change(textarea, {target: {value: ''}});
            expect(screen.getAllByText(/Hello3453/i)).toHaveLength(1);
        });

        it('check the number of the list', () => {
            fireEvent.change(textarea, {target: {value: 'Hello0002'}});
            fireEvent.click(button);
            fireEvent.change(textarea, {target: {value: 'Hello0003'}});
            fireEvent.click(button)
            fireEvent.change(textarea, {target: {value: 'Hello0004'}});
            fireEvent.click(button)
            const listitem = screen.getAllByRole('listitem')
            expect(listitem).toHaveLength(4);
        });

        it('textarea value', () => {
            fireEvent.change(textarea, {target: {value: 'Hello0005'}});
            const displayValue = screen.getByDisplayValue('Hello0005');
            expect(displayValue).toBeInTheDocument();
        });
    });
});

