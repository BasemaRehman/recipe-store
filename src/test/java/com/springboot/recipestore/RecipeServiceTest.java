package com.springboot.recipestore;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.springboot.recipestore.Recipe.RecipeBuilder;

import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class RecipeServiceTest {

    private RecipeService underTest;
    @Mock
    private RecipeInterface recipeInterface;

    @BeforeEach
    void setUp() {
        underTest = new RecipeService(recipeInterface);
    }

    @Test
    void selectAllRecipes() {
        List<Recipe> results = underTest.selectAllRecipes();
        assertEquals(0, results.size());
    }

    @Test
    void selectRecipeByName() {
        //When
        underTest.selectRecipeByName("cake");
        //Then
        verify(recipeInterface).getById("cake");
    }

    @Test
    void insertNewRecipe() {
        Recipe recipe = new RecipeBuilder().setName("cake")
                .setCategory("test")
                .setIngredients(new String[]{"test"})
                .setMethod(new String[]{"test"})
                .setSize("1")
                .build();
        //When
        underTest.insertNewRecipe(recipe);
        //Then
        ArgumentCaptor<Recipe> captor = ArgumentCaptor.forClass(Recipe.class);
        verify(recipeInterface).save(captor.capture());
        Recipe captured = captor.getValue();
        assertThat(captured).isEqualTo(recipe);
    }
}