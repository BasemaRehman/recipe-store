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
}
