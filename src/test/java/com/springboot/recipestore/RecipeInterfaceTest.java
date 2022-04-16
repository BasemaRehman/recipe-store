package com.springboot.recipestore;


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;


@DataJpaTest
class RecipeInterfaceTest {
    private Recipe recipe;
    @Autowired
    private RecipeInterface underTest;

    @BeforeEach
    void setUp() {
        recipe = new Recipe.RecipeBuilder().setName("Carrot Cake")
                .setCategory("cake")
                .setIngredients(new String[]{"Eggs", "Butter"})
                .setMethod(new String[]{"example method"})
                .setSize("8 slices")
                .build();

    }

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

   @Test
    void itShouldUpdateRecipe(){
        //given
        underTest.save(recipe);

        //When
        underTest.updateRecipeByName(recipe.getName(), "Update", "update", "update");

        //Then
        Optional<Recipe> result = underTest.findById("Update");
        assertThat(result).isNotNull();
    }

}