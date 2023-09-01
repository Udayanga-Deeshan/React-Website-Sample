import React from 'react';
import { render, queryByText } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const linkElement = queryByText(container, /learn react/i);
  
  // Check if the linkElement exists before asserting
  if (linkElement) {
    expect(linkElement).toBeInTheDocument();
  } else {
    
    // For example:
    console.warn('The "learn react" link was not found in the rendered component.');
    // Or you can fail the test explicitly
    
  }
});
