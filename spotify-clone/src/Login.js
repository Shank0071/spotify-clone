import React from 'react'
import "./Login.css"
import { loginUrl } from './spotify'

export default function Login() {
  return (
    <div className="Login">
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
        <a href={ loginUrl }>LOGIN WITH SPOTIFY</a>
    </div>
  )
}
