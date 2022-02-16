package com.springboot.recipestore;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeInterface extends JpaRepository<Recipe, Integer> {


}
