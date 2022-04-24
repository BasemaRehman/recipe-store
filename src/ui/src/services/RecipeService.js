import axios from "axios";

const BASE_URI = "http://localhost:8080/api/v1/recipes";

class RecipeService{
    getRecipes(){
        return axios.get(BASE_URI);
    }

    createRecipe(recipe){
        const config = {
            headers:{
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Content-Type": "application/json"
            }
          };
        return axios.post(BASE_URI, JSON.stringify(recipe), config);
    }

    getRecipeByName(name){
        return axios.get(BASE_URI + '/' + name);
    }

    updateRecipe(name, recipe){
        return axios.put(BASE_URI + '/' + name, recipe);
    }

    deleteRecipe(name){
        return axios.delete(BASE_URI + '/' + name);
    }

}

export default new RecipeService