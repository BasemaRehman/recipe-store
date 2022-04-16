import React, { useState } from "react";
import "./CreateRecipeComponent.css";
import { useNavigate } from "react-router-dom";
import RecipeService from "../services/RecipeService";

export default function CreateRecipeComponent() {

  const history = useNavigate();
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [category, setCategory] = useState('')
  const [stringIngredients, setIngredients] = useState('')
  const [stringMethod, setMethod] = useState('')


  const saveRecipe = (e) => {
    e.preventDefault();
    const ingredients = stringIngredients.split(',')
    const method = stringIngredients.split(',')
    const recipe = {name, size, category, ingredients, method};
    console.log(recipe);
    
    RecipeService.createRecipe(recipe).then((response) => {
      console.log(response.data);
      history("/");

    }).catch(error => {
      console.log(error);
    })

  }

  return (
    <div className="form-container">
      <form className="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          onChange={(e) => setName(e.target.value)}
          value = {name}
          className="form-field"
          type="text"
          placeholder="Name"
          name="Name"
        />
        <input
        onChange={(e) => setSize(e.target.value)}
          value = {size}
          className="form-field"
          type="text"
          placeholder="Size"
          name="Size"
        />
        <input
        onChange={(e) => setCategory(e.target.value)}
          value = {category}
          className="form-field"
          type="text"
          placeholder="Category"
          name="Category"
        />
        <input
        onChange={(e) => setIngredients(e.target.value)}
          value = {stringIngredients}
          className="form-field"
          type="text"
          placeholder="Ingredients"
          name="Ingredients"
        />
        <input
        onChange={(e) => setMethod(e.target.value)}
          value = {stringMethod}
          className="form-field"
          type="text"
          placeholder="Method"
          name="Method"
        />
        <button onClick = {(e) => saveRecipe(e)} className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}