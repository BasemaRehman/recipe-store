import RecipeService from "../services/RecipeService";
import getAllRecipes from './ListRecipePagesComponent';
import {DeleteRecipe} from "./ListRecipePagesComponent"


export default function DeleteModal({closeModal, deletion}) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="modalTitle">
          <h1>Are you sure you want to Delete</h1>
        </div>
        <div className="modalBody">
          <p>This action can not be undone</p>
        </div>
        <div className="modalFooter">
          <button onClick={() => [deletion(true), closeModal(false)]}>Yes</button>
          <button onClick={() => closeModal(false)}>No</button>
        </div>
      </div>
    </div>
  )
}