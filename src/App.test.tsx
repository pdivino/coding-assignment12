import { render, screen } from '@testing-library/react';
import App from './App';

// Confirms that the main UI Garden page loads successfully.
test('renders the UI Garden heading', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: "Paolo's UI Garden",
  });

  expect(heading).toBeVisible();
});