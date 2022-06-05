import React, { useState, useEffect } from 'react'
import RecipeService from '../services/RecipeService'
import Card from './Card';
import './styles/Card.scss';
import DeleteModal from './DeleteModal';
import RecipeModal from './RecipeModal';
import { Link } from 'react-router-dom';


const ListRecipePagesComponent = () => {

    const getAllRecipes = (setRecipes) => {
        RecipeService.getRecipes().then((response) => {
            setRecipes(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }


    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        getAllRecipes(setRecipes);
    }, [])


    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deletion, setdeletion] = useState(false);
    const [openRecipe, setOpenRecipe] = useState(false);
    const [recipeToView, setRecipeToView] = useState([]);
    const [recipeName, setRecipeName] = useState('');

    const DeleteRecipe = ({id}) => {
        RecipeService.deleteRecipe(id).then(() =>{
            getAllRecipes(setRecipes); 
            setdeletion(false)
            }).catch(error =>{
                console.log(error);
            })
         }

    return (
        <div className="wrapper">
            {recipes.map(
            recipe => 
            <div key = {recipe.name} className='card'>
                <Card key = {recipe.name}
                    title={recipe.name} 
                    category={recipe.category} 
                    serving={recipe.size} />
                    <button className="card__btn" onClick={() => {setRecipeToView({recipe}); setOpenRecipe(true)}}>View Recipe</button>
                
                <div>
                    <Link to={`/edit-recipe/${recipe.name}`} state={{ unlocked: "" }} className="card__changeBtn">Update</Link>
                    <button className="card__changeBtn" onClick={() => {setRecipeName(recipe.name); setOpenDeleteModal(true)}}>Delete</button>
                </div>
            </div>
            )}
            {openRecipe && <RecipeModal id='#hidden' closeModal={setOpenRecipe} recipe={recipeToView} />}
            {openDeleteModal && <DeleteModal closeModal={setOpenDeleteModal} deletion={setdeletion}/>}
            {deletion &&  <DeleteRecipe id={recipeName}/>}
        </div>
    
    )
}

export default ListRecipePagesComponent