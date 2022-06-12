import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Navbar from '../components/Navbar'

  test('should render navbar component', () => {
    render(<MemoryRouter><Navbar/></MemoryRouter>)
    expect(screen.getByTestId('navbar-test')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-test')).toHaveTextContent('Recipe Store');
  })


