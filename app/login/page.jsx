"use client"

import { signIn } from '@/auth'

const Login = () => {

  const handleGithubSignIn = () => {
    signIn("github", {
      callbackUrl: '/'
    })
  }

  return (
    <div className='flex justify-center items-center flex-col'>
      <button onClick={handleGithubSignIn} className='px-4 py-2 rounded-md bg-rose-400 text-white flex items-center'>
        Continue with GitHub
      </button>
    </div>
  )
}

export default Login
