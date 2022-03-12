package com.springboot.recipestore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Recipes")
public class Recipe {
  /*  @SequenceGenerator(
            name = "recipe_sequence",
            sequenceName = "recipe_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "recipe_sequence",
            strategy = GenerationType.SEQUENCE
    )*/

   // private Integer id;
   @Id
    private String name;
    private String category;
    private String size;
    private String[] ingredients;
    private String[] method;

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getSize() {
        return size;
    }

    public String[] getIngredients() {
        return ingredients;
    }

    public String[] getMethod() {
        return method;
    }

    private Recipe(){}

    public static class RecipeBuilder{

        private String name;
        private String category;
        private String size;
        private String[] ingredients;
        private String[] method;

        public RecipeBuilder(){
        }

        public RecipeBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public RecipeBuilder setCategory(String category) {
            this.category = category;
            return this;
        }
        public RecipeBuilder setIngredients(String[] ingredients) {
            this.ingredients = ingredients;
            return this;
        }

        public RecipeBuilder setSize(String size) {
            this.size = size;
            return this;
        }

        public RecipeBuilder setMethod(String[] method) {
            this.method = method;
            return this;
        }

        public Recipe build(){
            Recipe recipe = new Recipe();
            recipe.name = this.name;
            recipe.category = this.category;
            recipe.size = this.size;
            recipe.ingredients = this.ingredients;
            recipe.method = this.method;
            return recipe;

        }
    }

}
