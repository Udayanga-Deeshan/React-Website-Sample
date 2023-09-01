import React from 'react';
import { render, queryByText } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(<App />);
  const linkElement = queryByText(container, /learn react/i);
  expect(linkElement).toBeInTheDocument();
});
