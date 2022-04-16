import React, { useState, useEffect } from 'react'
import RecipeService from '../services/RecipeService'
import Card from './Card';

export default function ListRecipePagesComponent() {

    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        getAllRecipes();
    }, [])

    const getAllRecipes = () => {
        RecipeService.getRecipes().then((response) => {
            setRecipes(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
  

    return (
        <div className="wrapper">
            {recipes.map(
            recipe => <Card key = {recipe.name} title={recipe.name} 
        category={recipe.category} 
        serving={recipe.size}/>
        )}
            <Card title="Test Title" 
            category="Cake" 
            serving="Eight Slices"/>
            <Card title="Test Title" 
            category="Cake" 
            serving="Eight Slices"/>
            <Card title="Test Title" 
            category="Cake" 
            serving="Eight Slices"/>
        </div>
        
    )
}

