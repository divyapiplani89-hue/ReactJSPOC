import React from "react"

const DeleteModal = ({
  show,
  onClose,
  onConfirm,
  username
}) => {


  if (!show) {
    return null
  }


  return (

    <div className="popup-overlay">

      <div className="popup-box">

        <h2>Delete User</h2>


        <p>
          Are you sure you want to delete
          <b> {username}</b>?
        </p>


        <div className="popup-buttons">


          <button onClick={onConfirm}>
            Yes
          </button>


          <button onClick={onClose}>
            Cancel
          </button>


        </div>


      </div>

    </div>

  )
}


export default DeleteModal