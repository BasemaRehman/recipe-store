import './Modal.css'
import { useState, useEffect } from 'react'
import RecipeService from '../services/RecipeService'

export default function UpdateModal({title, closeModal, recipe}) {
  
  const [stringIngredients, setIngredients] = useState('')
  const [stringMethod, setMethod] = useState('')
  const ingredients = stringIngredients.toString().split(',')
  const method = stringMethod.toString().split(',')
  const value = title == 'Ingredients' ? recipe.recipe.ingredients : recipe.recipe.method ;

  useEffect(() => {
    RecipeService.getRecipeByName(recipe.recipe.name).then((response) => {
      setIngredients(response.data.ingredients)
      setMethod(response.data.method)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  
    return (
        <div className='modalBackground'>
          <div className='modalContainer'>
            <div className='titleCloseBtn'>
              <button onClick={() =>{closeModal(false)}}>X</button>
              </div>
              <div className='modalTitle'>
                    <h1>recipeName</h1>
                </div><br />
                <div className='modalBody'>
                  
                  <div className="form-container">
                    <form className="register-form">
                      <input
                        onChange={(e) => title == 'ingredients' ? setIngredients(e.target.value) : setMethod(e.target.value)}
                        value = {value}
                        className="form-field"
                        type="text"
                        placeholder="title"
                        name="title"
                      />
                      </form>
                    </div>
                </div>
                <div className='modalFooter'>
                  <button onClick={() =>{closeModal(false)}} id='deleteBtn'>Cancel</button>
                  <button>Submit</button>
                </div>
          </div>
          
        </div>
    )
  }