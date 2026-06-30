import React, { useState, useEffect } from "react";

const EditUserModal = ({ show, onClose, onSave, selectedUser }) => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    role: ""
  })


  useEffect(() => {

    if (selectedUser) {
      setUser({
        username: selectedUser.username,
        email: selectedUser.email,
        role: selectedUser.role
      });
    }

  }, [selectedUser])


  if (!show) {
    return null
  }


  const handleSave = () => {

    if (
      !user.username ||
      !user.email ||
      !user.role
    ) {
      alert("Please fill all fields");
      return;
    }


    onSave({
      ...selectedUser,
      ...user
    });

  };


  return (

    <div className="popup-overlay">

      <div className="popup-box">

        <h2>Edit User</h2>


        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) =>
            setUser({
              ...user,
              username: e.target.value
            })
          }
        />


        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value
            })
          }
        />


        <select
          value={user.role}
          onChange={(e) =>
            setUser({
              ...user,
              role: e.target.value
            })
          }
        >

          <option value="">
            Select Role
          </option>

          <option value="Admin">
            Admin
          </option>

          <option value="Editor">
            Editor
          </option>

          <option value="Viewer">
            Viewer
          </option>

        </select>


        <div className="popup-buttons">

          <button onClick={handleSave}>
            Update
          </button>


          <button onClick={onClose}>
            Cancel
          </button>

        </div>


      </div>

    </div>

  );
};


export default EditUserModal;