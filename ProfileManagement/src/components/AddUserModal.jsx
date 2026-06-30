import React from 'react'
import { useState } from 'react'
import "../Dashboard.css"

const AddUserModal = ({ show, onClose, onSave }) => {

    const [user, setUser] = useState({
        username: "",
        role: "",
        email: ""
    })

    if (!show) {
        return null;
    }

    const handleSave = () => {

        if (
            !user.username ||
            !user.email ||
            !user.role
        ) {
            alert("Please fill all fields");
            return
        }

        onSave(user)
        setUser({
            username: "",
            email: "",
            role: ""
        })


    }



    return (
        <div className="popup-overlay">

            <div className="popup-box">

                <h2>Add User</h2>


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
                        Save
                    </button>


                    <button onClick={onClose}>
                        Cancel
                    </button>

                </div>


            </div>

        </div>
    )
}

export default AddUserModal