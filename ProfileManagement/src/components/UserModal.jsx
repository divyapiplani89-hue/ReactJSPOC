import React, { useState, useEffect } from "react";

const UserModal = ({
  show,
  onClose,
  onSave,
  selectedUser,
  mode
}) => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    role: ""
  })


  useEffect(() => {

    if (mode === "edit" && selectedUser) {

      setUser({
        username: selectedUser.username,
        email: selectedUser.email,
        role: selectedUser.role
      });

    } else {

      setUser({
        username: "",
        email: "",
        role: ""
      });

    }

  }, [mode, selectedUser]);


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

    if (mode === "add") {

        onSave(user);

    } else {

        onSave({
            ...selectedUser,
            ...user
        });

    }

};


  return (

    <div className="popup-overlay">

      <div className="popup-box">

        <h2>
          {mode === "add" ? "Add User" : "Edit User"}</h2>


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




          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={handleSave}>
            {mode === "add" ? "Save" : "Update"}
          </button>

        </div>


      </div>

    </div>

  );
};


export default UserModal;