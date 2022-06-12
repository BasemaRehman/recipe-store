import axios from "axios";

const BASE_URI = "http://localhost:8080/api/v1/recipes";

    export const getRecipes = async () => {
        return axios.get(BASE_URI);
    }

    export const createRecipe = async (recipe) => {
        const config = {
            headers:{
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Content-Type": "application/json"
            }
          };
        return axios.post(BASE_URI, JSON.stringify(recipe), config);
    }

    export const getRecipeByName = async (name) => {
        return axios.get(BASE_URI + '/' + name);
    }

    export const updateRecipe = async (name, recipe) => {
        return axios.put(BASE_URI + '/' + name, recipe);
    }

    export const deleteRecipe = async (name) => {
        return axios.delete(BASE_URI + '/' + name);
    }



