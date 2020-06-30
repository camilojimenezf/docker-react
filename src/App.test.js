import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Feature branch link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
