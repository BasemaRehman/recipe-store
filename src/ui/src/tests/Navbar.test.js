import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Navbar from '../components/Navbar'
import { createMemoryHistory } from 'history';
import { Router, Link } from 'react-router-dom';



const history = createMemoryHistory();

beforeEach(()=> {
  history.push = jest.fn();
})

  test('should render navbar component', () => {
    render(<MemoryRouter><Navbar/></MemoryRouter>)
    expect(screen.getByTestId('navbar-test')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-test')).toHaveTextContent('Recipe Store');
  })

  test('routes to /add-recipe from Navbar', () => {
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

  
