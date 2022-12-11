import React from 'react'
import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'

function SignIn() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Googleでログインする</Button>
    </div>
  )
}

export default SignIn