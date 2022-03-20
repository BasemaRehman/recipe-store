package com.springboot.recipestore;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@TestPropertySource(
        locations = "classpath:application-it.properties"
)
@AutoConfigureMockMvc
class RecipeControllerTest {

    private List<Recipe> recipes;
    @Autowired
    private MockMvc mvc;
    @Autowired
    private ObjectMapper mapper;
    @Autowired
    private RecipeInterface recipeInterfaceTest;
    private Recipe recipe;
    private String uriLink;

    @BeforeEach
    void setUp() {
        uriLink = "/api/v1/recipes";
        recipe = new Recipe.RecipeBuilder()
                .setName("Cake1")
                .setSize("1")
                .setCategory("category")
                .setIngredients(new String[]{"ingredients"})
                .setMethod(new String[]{"method"})
                .build();
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void itShouldSelectAllRecipes() throws Exception {
        ResultActions actions = mvc.perform(get(uriLink));
        actions.andExpect(status().isOk());
    }

    @Test
    void itShouldSelectARecipe() throws Exception {
        //given
        recipeInterfaceTest.save(recipe);
        ResultActions actions = mvc.perform(get(uriLink + "/Cake1"));
        actions.andExpect(status().isOk());
    }

    @Test
    void itShouldInsertARecipe() throws Exception {
        //Given
        //When
        ResultActions actions = mvc.perform(post(uriLink)
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(recipe)));
        //Then
        actions.andExpect(status().isOk());
        recipes = recipeInterfaceTest.findAll();
        assertEquals("Cake1", recipes.get(0).getName());
    }

    @Test
    void itShouldDeleteARecipe() throws Exception{
        //Given
        recipeInterfaceTest.save(recipe);
        //When
        ResultActions actions = mvc.perform(delete(uriLink + "/Cake1"));
        //Then
        actions.andExpect(status().isOk());
        recipes = recipeInterfaceTest.findAll();
        assertThat(recipes).doesNotHaveToString(recipe.toString());
    }

    @Test
    void itShouldUpdateARecipe() throws Exception{
        //Given
        Recipe updated = new Recipe.RecipeBuilder()
                .setName("Cake2")
                .setSize("size")
                .setCategory("category")
                .build();
        recipeInterfaceTest.save(recipe);
        //When
        ResultActions actions = mvc.perform(put(uriLink + "/Cake1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(updated)));
        //Then
        actions.andExpect(status().isOk());
        recipes = recipeInterfaceTest.findAll();
        assertEquals("Cake2", recipes.get(0).getName());
    }

    @Test
    void itShouldUpdateIngredients() throws Exception{
        //Given
        String[] ingredients = new String[]{"new1", "new2"};
        recipeInterfaceTest.save(recipe);
        //When
        ResultActions actions = mvc.perform(put(uriLink + "/ingredients/Cake1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(ingredients)));
        //Then
        actions.andExpect(status().isOk());
        recipes = recipeInterfaceTest.findAll();
        assertEquals(2, recipes.get(0).getIngredients().length);
    }

    @Test
    void itShouldUpdateMethod() throws Exception{
        //Given
        String[] method = new String[]{"new1", "new2"};
        recipeInterfaceTest.save(recipe);
        //When
        ResultActions actions = mvc.perform(put(uriLink + "/method/Cake1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(mapper.writeValueAsString(method)));
        //Then
        actions.andExpect(status().isOk());
        recipes = recipeInterfaceTest.findAll();
        assertEquals(2, recipes.get(0).getMethod().length);
    }


}