import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./Profile.css"

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

        <div style={{ marginTop: "30px" }}>
          <h3>Demo Video</h3>

          <iframe
            width="500"
            height="280"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>



      </div>

    </div>

  )
}


export default Profile