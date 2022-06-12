import { render, screen } from '@testing-library/react';
import App from '../App'

test('renders the main page', () => {
  render(<App/>);
  expect(screen.getByTestId('navbar-test')).toBeInTheDocument();
  expect(screen.getByTestId('app-test')).toContainHTML('/add-recipe');  
})