import './styles/Modal.css'
import { Link } from 'react-router-dom';

export default function RecipeModal({closeModal, recipe}){
    
    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='modalTitle'>
                    <h1>{recipe.recipe.name}</h1>
                </div>
                <div className='modalContent'>
                    <br/><p>
                        <b>Servings/Size</b>: {recipe.recipe.size}
                    </p><br/>
                    <p>
                        <b>Category</b>: {recipe.recipe.category}
                    </p><br/>
                    <p>
                        <b>Ingredients</b>: <br/>{recipe.recipe.ingredients.map(ing => (
                        <li key={ing} style={{marginLeft:'10px'}}>{ing}</li>
                        ))}
                    </p><br/>
                    <p>
                        <b>Method</b>: <br/>{recipe.recipe.method.map(meth => (
                       <li key={meth} style={{marginLeft:'10px'}}>{meth}</li>
                        ))}
                    </p> <br/>
                </div>
                <div className='modalFooter'>
                    <Link to={`/edit-recipe/${recipe.recipe.name}` } className="submitButton">Update Ingredients</Link>
                    <Link to={`/edit-recipe/${recipe.recipe.name}` } className="submitButton">Update Method</Link>

                    <button onClick={() => closeModal(false)} id='deleteBtn'>Cancel</button>
                </div>
            </div>
         </div>
        
 
    )
}