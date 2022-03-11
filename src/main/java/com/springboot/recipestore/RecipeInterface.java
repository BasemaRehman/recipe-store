package com.springboot.recipestore;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RecipeInterface extends JpaRepository<Recipe, String> {

    @Modifying
    @Transactional
    @Query("" +
            "UPDATE Recipe r " +
            "SET r.ingredients = ?2 " +
            "WHERE r.name = ?1"
    )
    void updateRecipeByName(String name, List<String> Ingredients);
}
