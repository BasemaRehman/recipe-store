package com.springboot.recipestore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return recipeInterface.getById(name);
    }

    String insertNewRecipe(Recipe recipe){
        recipeInterface.save(recipe);
        return "Insertion Successful";
    }

    void deleteRecipeByName(String name){
        recipeInterface.deleteById(name);
    }

    void updateRecipeByName(String name, List<String> ingredients){
        recipeInterface.updateRecipeByName(name, ingredients);
    }


}
