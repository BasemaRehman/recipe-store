package com.springboot.recipestore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private final RecipeInterface recipeInterface;

    @Autowired
    public RecipeService(RecipeInterface recipe){
        this.recipeInterface = recipe;

    }

    List<Recipe> selectAllRecipes(){
        return recipeInterface.findAll();
    }

    Recipe selectRecipeByName(String name){
        return recipeInterface.findById(name).isPresent() ? recipeInterface.findById(name).get() : new Recipe();
    }

    String insertNewRecipe(Recipe recipe){
        try {
            recipeInterface.save(recipe);
            return "Insertion Successful";
        }catch(HttpClientErrorException.BadRequest br){
            return br.getMessage();
        }
    }

    String deleteRecipeByName(String name){
        if(recipeInterface.existsById(name)){
            recipeInterface.deleteById(name);
            return "Deletion Successful";
        }else{
            return "No Name exists for " + name;
        }
    }

    void updateIngredientsByName(String name, String[] ingredients){
        if(recipeInterface.existsById(name)){
            recipeInterface.updateIngredientsByName(name, ingredients);
        }
    }

    void updateMethodByName(String name, String[] method){
        if(recipeInterface.existsById(name)){
            recipeInterface.updateMethodByName(name, method);
        }
    }

    void updateRecipeByName(String name, Recipe recipe){
        if(recipeInterface.existsById(name)){
            recipeInterface.updateRecipeByName(name, recipe.getName(), recipe.getSize(), recipe.getCategory());
        }
    }
}
