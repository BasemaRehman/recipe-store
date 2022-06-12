import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../components/Card'

  test('should render Card', () => {
    render(<Card props={{title: 'Lemon cake', servings:'8', category: 'cakes'}}/>);
    expect(screen.getByTestId('card-test')).toBeInTheDocument();
  });