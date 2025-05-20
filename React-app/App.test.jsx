import React from 'react';
import { render, screen, fireEvent, logRoles } from '@testing-library/react';
import Quiz from './src/components/Quiz';

test('Next button is rendered and clickable', () => {
    render(<Quiz />);

    const nextButton = screen.getByRole('button', { name: /Next/i });
    expect(nextButton).toBeTruthy();


    // Simulate click event
    fireEvent.click(nextButton);

    // After click, you can check if question changed or any state change if needed
    // For now just checking button click doesn't break anything
});

test("test 2",()=>{
    render(<Quiz/>)
    logRoles(screen.getByTestId("ans"))
    const options = screen.getAllByTestId("ans");
  expect(options.length).toBe(4);  // your question has 4 options

  // For example, check if first option has text 'modi'
  expect(options[0].textContent).toBe('modi');
})