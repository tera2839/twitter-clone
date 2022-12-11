import React from 'react'
import { auth } from '../../firebase'
import "./SignOut.css"

function SignOut() {
  return (
    <div>
        <p onClick={() => auth.signOut()} className="signout--button">
          サイン<span></span>アウト
        </p>
    </div>
  )
}

function UserInfo() {
  return {

  }
}

export default SignOut