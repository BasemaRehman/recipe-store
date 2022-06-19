import ListRecipePagesComponent from '../components/ListRecipePagesComponent';
import { render, screen } from '@testing-library/react';
import { mockGetAll } from "./RecipeServiceMocks";

jest.mock('axios');

test('gets data successfully', async () => {
        const data = {
            "name" : "cake2",
            "category" : "test",
            "size" : "test",
            "ingredients": [],
            "method": []
        }
        mockGetAll(data);
        render(<ListRecipePagesComponent/>)
        const listRecipes = screen.getByTestId("render-listrecipe");
        expect(listRecipes).toBeInTheDocument();
        
    })
