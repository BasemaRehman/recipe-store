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
            <div className="container">
                {this.state.recipes.map(
                    recipe => <Card key = {recipe.name} title={recipe.name} 
                category={recipe.category} 
                serving={recipe.size}/>
                )}
                <Card title="testTitle" 
                category="testCategory" 
                serving="testSize5"/>
            </div>
           /* <div>
                 <h2 className="text-center">Recipe List</h2>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Recipe Name</th>
                                    <th> Recipe Category</th>
                                    <th> Recipe Size</th>
                                    <th> Recipe Ingredients</th>
                                    <th> Recipe Method</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.recipes.map(
                                        recipe => 
                                        <tr key = {recipe.name}>
                                             <td> {recipe.name} </td>   
                                             <td> {recipe.category}</td>
                                             <td> {recipe.size}</td>
                                             <td>{recipe.ingredients.map((ingred, idx) =>{
                                                 return <li key={idx}><span>{ingred}</span><br/></li>
                                                }
                                            )}</td>
                                            <td>{recipe.method.map((meth, idx) =>{
                                                 return <li key={idx}><span>{meth}</span><br/></li>
                                                }
                                            )}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>*/
        )
    }
}

export default ListRecipePagesComponent