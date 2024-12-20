import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import App from '../src/App.jsx';

describe('App component tests', () => {
 

  it('should correctly increment counter when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    fireEvent.click(button);
    expect(button.textContent).toContain('count is 1');
  });

  it('should toggle visibility of the counter button', () => {
    render(<App />);
    const toggleButton = screen.getByText(/Toggle Counter Visibility/i);
    const counterButton = () => screen.getByText(/count is/i);
    fireEvent.click(toggleButton);
    expect(screen.queryByText(/count is/i)).toBeNull(); // Should not be visible
    fireEvent.click(toggleButton);
    expect(counterButton()).toBeDefined(); // Should be visible again
  });

  it('should set counter value from input field', () => {
    const { container } = render(<App />);
    const input = screen.getByPlaceholderText(/Set counter value/i);
    const setButton = container.querySelector('.set-counter-button');
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(setButton);
    expect(screen.getByText(/count is 5/i)).toBeDefined();
  });

  it('should reset counter to zero', () => {
    render(<App />);
    const resetButton = screen.getByText(/Reset Counter/i);
    fireEvent.click(screen.getByText(/count is 0/i)); // Increment to ensure reset works
    fireEvent.click(resetButton);
    expect(screen.getByText(/count is 0/i)).toBeDefined();
  });

 
});
