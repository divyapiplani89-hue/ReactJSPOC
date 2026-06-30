import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./Dashboard.css"

const Profile = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const user = location.state?.user


  if (!user) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-card">

          <h2>User not found</h2>

          <button onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </button>

        </div>
      </div>
    )
  }


  return (

    <div className="dashboard-container">

      <div className="dashboard-card">


        {/* Breadcrumb */}

        <div
          style={{
            textAlign: "left",
            marginBottom: "20px"
          }}
        >

          <span
            style={{
              color: "blue",
              cursor: "pointer"
            }}

            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </span>


          {" > "}


          <span>
            Profile
          </span>

        </div>



        <h2>User Profile</h2>



        <div className="profile-details">


          <div className="profile-row">
            <b>Username</b>
            <span>{user.username}</span>
          </div>


          <div className="profile-row">
            <b>Email</b>
            <span>{user.email}</span>
          </div>


          <div className="profile-row">
            <b>Role</b>
            <span>{user.role}</span>
          </div>


        </div>



       

      </div>

    </div>

  )
}


export default Profile