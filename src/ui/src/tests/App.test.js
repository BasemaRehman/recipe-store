import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'
import { createMemoryHistory } from 'history';
import { Router, Link, MemoryRouter } from 'react-router-dom';
import CreateRecipeComponent from '../components/CreateRecipeComponent';
import { mockGetAll } from "./RecipeServiceMocks";

jest.mock('axios');

const history = createMemoryHistory();
beforeEach(()=> {
  history.push = jest.fn();
  
})



test('renders the main page', () => {
  render(<App/>);
  expect(screen.getByTestId('navbar-test')).toBeInTheDocument();
  expect(screen.getByTestId('app-test')).toContainHTML('/add-recipe');  
})

test('routes to /add-recipe', () => {
  
  console.log(history.location);
  render(
    <Router location={history.location} navigator={history}>
      <Link to="/add-recipe">Click Me</Link>
    </Router>,
  );

  fireEvent.click(screen.getByText(/Click Me/i));

  expect(history.push).toHaveBeenCalledWith(
    {
      hash : "",
      pathname: '/add-recipe',
      search : ""
    },
    undefined,
  );
});

test('routes to /edit-recipe', () => {
  

  render(
    <Router location={history.location} navigator={history}>
      <Link to="/edit-recipe/:id">Click Me</Link>
    </Router>,
  );

  fireEvent.click(screen.getByText(/Click Me/i));

  expect(history.push).toHaveBeenCalledWith(
    {
      hash : "",
      pathname: '/edit-recipe/:id',
      search : ""
    },
    undefined,
  );
});


/*test("it renders create-recipe", async () => {
  const data = {name: "qwerty"}
  mockGetAll({data})
  render(<MemoryRouter><CreateRecipeComponent/></MemoryRouter>)

}) */