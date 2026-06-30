import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        setError("")
        if (username.trim() === "") {
            setError("Please provide username")
            return
        }
        if (password.trim() === "") {
            setError("Please provide password")
            return
        }

        const users = JSON.parse(localStorage.getItem("users")) || []

        const currentUser = users.find((u) =>
            u.username === username &&
            u.password === password
        )

        if (currentUser) {
            localStorage.setItem("loggedInUser", JSON.stringify(currentUser))
            navigate('/dashboard')
        } else {
            setError("Invalid username or password")
        }



        console.log(username, password)
    }


    return (
        <div className='login-container'>
            <div className='login-card'>
                <h2>Login</h2>

                <form onSubmit={handleLogin}>
                    <div className='input-group'>
                        <label>Username</label>
                        <input
                            type='text'
                            placeholder='Enter Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='input-group'>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <p className="error">{error}</p>}

                    <button type="submit">Login</button>


                </form>


            </div>




        </div>
    )
}

export default Login