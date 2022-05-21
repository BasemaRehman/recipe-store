import React, { useState, useEffect } from 'react'
import RecipeService from '../services/RecipeService'
import Card from './Card';
import './styles/Card.scss';
import DeleteModal from './DeleteModal';
import RecipeModal from './RecipeModal';
import CreateRecipeComponent from './CreateRecipeComponent';
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


    const [openModal, setOpenModal] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [deletion, setdeletion] = useState(false);
    const [openRecipe, setOpenRecipe] = useState(false);
    const [viewRecipe, setViewRecipe] = useState([]);
    var recipeName = '';
 

    const changeName = (name) => {
        recipeName = name
    }

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
                {changeName(recipe.name)}
                <Card key = {recipe.name}
                    title={recipe.name} 
                    category={recipe.category} 
                    serving={recipe.size} />
                    <button className="card__btn" onClick={() => {setViewRecipe({recipe}); setOpenRecipe(true)}}>View Recipe</button>
                
                <div>
                    <Link to={`/edit-recipe/${recipe.name}`} className="card__changeBtn">Update</Link>
                    <button className="card__changeBtn" onClick={() => {setOpenModal(true)}}>Delete</button>
                </div>
            </div>
            )}
            {openRecipe && <RecipeModal id='#hidden' closeModal={setOpenRecipe} recipe={viewRecipe} />}
            {openModal && <DeleteModal closeModal={setOpenModal} deletion={setdeletion}/>}
            {openForm && <CreateRecipeComponent openModal={setOpenForm} input={recipeName} />}
            {deletion &&  <DeleteRecipe id={recipeName}/>}
        </div>
    
    )
}

export default ListRecipePagesComponent