import React, { Component } from 'react'
import RecipeService from '../services/RecipeService'
import Card from './Card';

class ListRecipePagesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                recipes: []
        }

    }

    componentDidMount(){
        RecipeService.getRecipes().then((res) => {
            this.setState({ recipes: res.data});
        }
        
        );
        
    }

    render() {
        return (
            
            <div className="wrapper">
                {this.state.recipes.map(
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
}

export default ListRecipePagesComponent