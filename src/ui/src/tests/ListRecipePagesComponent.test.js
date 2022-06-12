import axios from 'axios';
import {getRecipes} from '../services/RecipeService';
import ListRecipePagesComponent from '../components/ListRecipePagesComponent';
import { render, screen } from '@testing-library/react';

jest.mock('axios');

describe('getRecipes', () => {
    it('gets data successfully', async () => {
        const data = {
            "name" : "cake2",
            "category" : "test",
            "size" : "test",
            "ingredients": [],
            "method": []
        }
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getRecipes('react')).resolves.toEqual(data);
        const listRecipes = render(<ListRecipePagesComponent/>)
    })
})