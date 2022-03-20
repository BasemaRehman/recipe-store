package com.springboot.recipestore;


import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;


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
    void itShouldUpdateIngredients() {
        //Given
        Recipe recipe = new Recipe.RecipeBuilder().setName("Carrot Cake")
                .setCategory("cake")
                .setIngredients(new String[]{"Eggs", "Butter"})
                .setMethod(new String[]{"example method"})
                .setSize("8 slices")
                .build();

        underTest.save(recipe);

        //When
        underTest.updateIngredientsByName(recipe.getName(), new String[]{"oil"});
        //assertTrue(Arrays.asList(underTest.getById(recipe.getName()).getIngredients()).contains("oil"));

    }

    @Test
    void itShouldUpdateMethod() {
        //Given
        underTest.save(recipe);

        String[] newMethod = new String[1];
        newMethod[0] = "new one";
        //When
        underTest.updateMethodByName("Carrot Cake", newMethod);
        List<Recipe> employees = underTest.findAll();
        System.out.println("SIZE " + employees.size() + " VALUE " + employees.get(0).getMethod()[0] + " " + employees.get(0).getName());
        //Then
        //Assertions.assertThat(underTest.existsById("Carrot Cake"));
        //Assertions.assertThat(underTest.getById("Carrot Cake").getMethod()[0]).isEqualTo("new one");
    }
}