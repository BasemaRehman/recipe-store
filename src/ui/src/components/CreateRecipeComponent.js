import React, { useEffect, useState } from "react";
import "./CreateRecipeComponent.css";
import { useNavigate, useParams } from "react-router-dom";
import RecipeService from "../services/RecipeService";

export default function CreateRecipeComponent() {

  const history = useNavigate();
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [category, setCategory] = useState('')
  const [stringIngredients, setIngredients] = useState('')
  const [stringMethod, setMethod] = useState('')
  const {id} = useParams();

  const saveOrUpdateRecipe = (e) => {
    e.preventDefault();

    const ingredients = stringIngredients.toString().split(',')
    const method = stringMethod.toString().split(',')
    const recipe = {name, size, category, ingredients, method};
    console.log(recipe);

    if(id){
      RecipeService.updateRecipe(id, recipe).then((response) => {
        console.log(response.data);
        history("/");

      }).catch(error => {
        console.log(error);
      })

    }else{
      RecipeService.createRecipe(recipe).then((response) => {
        console.log(response.data);
        history("/");

      }).catch(error => {
        console.log(error);
      })
    }

  }

  useEffect(() => {
    RecipeService.getRecipeByName(id).then((response) => {
      setName(response.data.name)
      setCategory(response.data.category)
      setSize(response.data.size)
      setIngredients(response.data.ingredients)
      setMethod(response.data.method)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const title = () => {
    if(id){
      return <h1 style={{textAlign: "center"}}>Update a Recipe</h1>
    }else{
      return <h1 style={{textAlign: "center"}}>Add a Recipe</h1>
    }
  }

  return (
    <div>
      {title()}
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
          <button onClick = {(e) => saveOrUpdateRecipe(e)} className="form-field" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}