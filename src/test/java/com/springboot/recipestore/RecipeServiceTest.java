package com.springboot.recipestore;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

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
}