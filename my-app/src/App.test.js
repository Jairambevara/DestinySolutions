import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the two clock panels and join button', () => {
  render(<App />);

  expect(screen.getByText(/dark clock/i)).toBeInTheDocument();
  expect(screen.getByText(/light clock/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /join us/i })).toBeInTheDocument();
});
