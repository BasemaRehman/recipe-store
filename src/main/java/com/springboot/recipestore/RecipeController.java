package com.springboot.recipestore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/recipes")
public class RecipeController {
    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService){
        this.recipeService = recipeService;
    }

    @GetMapping
    public List<Recipe> selectAllRecipes(){
        return recipeService.selectAllRecipes();
    }

    @GetMapping(path = "{Id}")
    public Recipe selectRecipeByName(@PathVariable("Id") String name){
        return recipeService.selectRecipeByName(name);
    }

    @PostMapping
    public String insertNewRecipe(@RequestBody Recipe recipe){
        return recipeService.insertNewRecipe(recipe);
    }

    @DeleteMapping(path = "{Id}")
    public void deleteRecipeById(@PathVariable("Id") String name){
        recipeService.deleteRecipeByName(name);
    }

    @PutMapping(path = "/ingredients/{Id}")
    public void updateRecipeByName(@PathVariable("Id") String name, @RequestBody String[] ingredients){
        recipeService.updateRecipeByName(name, ingredients);
    }
}
