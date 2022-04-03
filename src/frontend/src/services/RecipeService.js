import axios from "axios";

const BASE_URI = "http://localhost:8080/api/v1/recipes";

class RecipeService{
    getRecipes(){
        return axios.get(BASE_URI);
    }

}

export default new RecipeService