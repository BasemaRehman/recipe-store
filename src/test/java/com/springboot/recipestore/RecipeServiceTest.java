package com.springboot.recipestore;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.springboot.recipestore.Recipe.RecipeBuilder;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class RecipeServiceTest {

    private RecipeService underTest;
    private Recipe recipe;
    @Mock
    private RecipeInterface recipeInterface;

    @BeforeEach
    void setUp() {
        underTest = new RecipeService(recipeInterface);
        recipe = new RecipeBuilder().setName("cake")
                .setCategory("test")
                .setIngredients(new String[]{"test"})
                .setMethod(new String[]{"test"})
                .setSize("1")
                .build();
    }
    @AfterEach
    void tearDown() {


    }

    @Test
    void itShouldSelectAllRecipes() {
        List<Recipe> results = underTest.selectAllRecipes();
        assertEquals(0, results.size());
    }

    @Test
    void itShouldSelectRecipeByName() {
        //When
        underTest.selectRecipeByName("cake");
        //Then
        verify(recipeInterface).findById("cake");
    }

    @Test
    void itShouldInsertNewRecipe() {

        //When
        underTest.insertNewRecipe(recipe);
        //Then
        ArgumentCaptor<Recipe> captor = ArgumentCaptor.forClass(Recipe.class);
        verify(recipeInterface).save(captor.capture());
        Recipe captured = captor.getValue();
        assertThat(captured).isEqualTo(recipe);
    }

    @Test
    void itShouldDeleteRecipe(){
        //Given
        given(recipeInterface.existsById("Test name")).willReturn(true);
        //When
        underTest.deleteRecipeByName("Test name");
        //Then
        verify(recipeInterface).deleteById("Test name");
    }

    @Test
    void itShouldUpdateIngredients(){
        //Given
        given(recipeInterface.existsById("Test name")).willReturn(true);
        //When
        underTest.updateIngredientsByName("Test name", new String[]{"test"});
        //Then
        verify(recipeInterface).updateIngredientsByName("Test name", new String[]{"test"});
    }

    @Test
    void itShouldUpdateMethod(){
        //Given
        given(recipeInterface.existsById("Test name")).willReturn(true);
        //When
        underTest.updateMethodByName("Test name", new String[]{"test"});
        //Then
        verify(recipeInterface).updateMethodByName("Test name", new String[]{"test"});
    }

    @Test
    void itShouldUpdateRecipe(){
        //Given
        Recipe testChange = new RecipeBuilder().setName("new recipe")
                            .setCategory("cakes")
                            .setSize("new size")
                            .build();
        given(recipeInterface.existsById("Test name")).willReturn(true);
        //When
        underTest.updateRecipeByName("Test name", testChange);
        //Then
        verify(recipeInterface).updateRecipeByName("Test name", testChange.getName(), testChange.getSize(), testChange.getCategory());
    }


}