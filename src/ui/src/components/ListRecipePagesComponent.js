import React, { useState, useEffect } from 'react'
import RecipeService from '../services/RecipeService'
import Card from './Card';
import './Card.scss';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const ListRecipePagesComponent = () => {

    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        getAllRecipes(setRecipes);
    }, [])

    const getAllRecipes = (setRecipes) => {
        RecipeService.getRecipes().then((response) => {
            setRecipes(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }


    const [openModal, setOpenModal] = useState(false);
    const [deletion, setdeletion] = useState(false)
    var recipeName = '';

    const changeName = (name) => {
        recipeName = name
    }

    const DeleteRecipe = ({id}) => {
        RecipeService.deleteRecipe(id).then((response) =>{
            console.log(response.data);
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
                    serving={recipe.size}>
                </Card>
                <Link className= "card__btn"to={`/edit-recipe/${recipe.name}`}>Update</Link>
                <button className="card__btn" onClick={() => {setOpenModal(true)}}>Delete {recipeName}</button>
                
            </div>
            )}
            {openModal && <DeleteModal closeModal={setOpenModal} deletion={setdeletion}/>}
            {deletion &&  <DeleteRecipe id={recipeName}/>}
                
            <div className='card'>
                <Card title="Test Title" 
                    category="Cake" 
                    serving="Eight Slices"/>
                   
            </div>
        </div>
        
    )
}

export default ListRecipePagesComponent;

