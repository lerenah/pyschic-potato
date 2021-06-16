import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bye There!/i);
  expect(linkElement).toBeInTheDocument();
});
