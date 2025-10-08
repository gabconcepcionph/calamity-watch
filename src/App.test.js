import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Stampcard', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stampcard/i);
  expect(linkElement).toBeInTheDocument();
});
