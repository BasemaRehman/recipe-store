package com.springboot.recipestore;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface RecipeInterface extends JpaRepository<Recipe, String> {

    @Modifying
    @Transactional
    @Query("" +
            "UPDATE Recipe r " +
            "SET r.ingredients = ?2 " +
            "WHERE r.name = ?1"
    )
    void updateIngredientsByName(String name, String[] ingredients);

    @Modifying
    @Transactional
    @Query("" +
            "UPDATE Recipe r " +
            "SET r.method = ?2 " +
            "WHERE r.name = ?1"
    )
    void updateMethodByName(String name, String[] method);

    @Modifying
    @Transactional
    @Query("" +
            "UPDATE Recipe r " +
            "SET r.category = ?4, " +
            "r.size = ?3, " +
            "r.name = ?2 " +
            "WHERE r.name = ?1"
    )
    void updateRecipeByName(String name, String newName, String size, String category);
}
