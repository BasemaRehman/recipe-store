import "./Modal.css"


export default function DeleteModal({closeModal, deletion}) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="modalTitle">
          <h1>Are you sure you want to delete this recipe?</h1>
        </div>
        <div className="modalBody">
          <p>This action can not be undone</p>
        </div>
        <div className="modalFooter">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button onClick={() => [deletion(true), closeModal(false)]} id="deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  )
}