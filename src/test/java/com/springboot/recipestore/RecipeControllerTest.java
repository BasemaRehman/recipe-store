package com.springboot.recipestore;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@TestPropertySource(
        locations = "classpath:application-it.properties"
)
@AutoConfigureMockMvc
class RecipeControllerTest {

    @Autowired
    private MockMvc mvc;
    private String uriLink;

    @BeforeEach
    void setUp() {
        uriLink = "/api/v1/recipes";
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void selectAllRecipes() throws Exception {
        ResultActions actions = mvc.perform(get(uriLink));
        actions.andExpect(status().isOk());
    }
}