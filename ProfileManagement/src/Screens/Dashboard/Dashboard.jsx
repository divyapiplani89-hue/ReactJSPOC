import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Dashboard.css"
import UserModal from '../../components/UserModal'
import DeleteModal from '../../components/DeleteModal'

const Dashboard = () => {

  const navigate = useNavigate()
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
  const users = JSON.parse(localStorage.getItem("users")) || []

  const [showAddPopup, setShowAddPopup] = useState(false)

  const [showEditPopup, setShowEditPopup] = useState(false)

  const [selectedUser, setSelectedUser] = useState(null)

  const [showDeletePopup, setShowDeletePopup] = useState(false)



  const logOut = () => {
    localStorage.removeItem("loggedInUser")
    navigate('/')

  }

  const addUser = (newUser) => {

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || []


    const userWithId = {
      id: Date.now(),
      ...newUser
    }


    const updatedUsers = [
      ...existingUsers,
      userWithId
    ]


    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    )


    setShowAddPopup(false)

    window.location.reload()
  }

  const updateUser = (updatedUser) => {

    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id
        ? updatedUser
        : user
    )
    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    )


    setShowEditPopup(false)

    window.location.reload()

  }



  const deleteUser = (id) => {

    const updatedUsers = users.filter(
      (user) => user.id !== selectedUser.id
    )


    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    )


    setShowDeletePopup(false)


    window.location.reload()
  }

  if (!loggedInUser.username) {
    logOut()
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Dashboard</h2>
        <h3>Welcome {loggedInUser.username}</h3>

        <div className="button-group">
          {loggedInUser.role !== "Viewer" && (
            <button onClick={() => setShowAddPopup(true)}>
              Add User
            </button>
          )}
          <button onClick={logOut}>Logout</button>
        </div>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              {loggedInUser.role !== "Viewer" && (
                <th>Action</th>
              )}

            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "gray"
                  }}
                >
                  No users available
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <span
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() =>
                        navigate("/profile", { state: { user } })
                      }
                    >
                      {user.username}
                    </span>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>

                  {loggedInUser.role !== "Viewer" && (
                    <td>
                      <div className="action-buttons">
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setShowEditPopup(true);
                          }}
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setShowDeletePopup(true);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
      <UserModal
        mode="add"
        show={showAddPopup}
        onClose={() => setShowAddPopup(false)}
        onSave={addUser}
      />

      <UserModal
        mode="edit"
        show={showEditPopup}
        selectedUser={selectedUser}
        onClose={() => setShowEditPopup(false)}
        onSave={updateUser}
      />

      <DeleteModal

        show={showDeletePopup}

        username={selectedUser?.username}

        onClose={() => setShowDeletePopup(false)}

        onConfirm={deleteUser}

      />

    </div>
  )
}

export default Dashboard