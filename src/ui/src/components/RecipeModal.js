import './Modal.css'
import UpdateModal from './UpdateModal';
import { useState } from 'react';

export default function RecipeModal({closeModal, recipe}){
    const [openUpdate, setOpenUpdate] = useState(false);
    const [title, setTitle] = useState('')
    
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
                    <button onClick={() => {setOpenUpdate(true); setTitle('Ingredients')}}>Update Ingredients</button>
                    <button onClick={() => {setOpenUpdate(true); setTitle('Method')}}>Update Method</button>
                    <button onClick={() => closeModal(false)} id='deleteBtn'>Cancel</button>
                </div>
            </div>
            {openUpdate && <UpdateModal id='#hidden' closeModal={setOpenUpdate} recipe={recipe} title={title} />}
         </div>
        
 
    )
}