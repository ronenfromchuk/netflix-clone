import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen () {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="LoginScreen">
      <div className="LoginScreen__background">
        <img className="LoginScreen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <button
          onClick={() => setSignIn(true)}
          className="LoginScreen__button">
          Sign In
          </button>
        <div className="LoginScreen__gradient"></div>
      </div>
      <div className="LoginScreen__body">
        {
          signIn ?
            <SignupScreen /> :
            (
              <>
                <h1>Unlimited films, TV shows and more.</h1>
                <h2>Watch anything. Cancel at any time.</h2>
                <h3>Read to watch? Enter your email to create or restart your membership.</h3>
                <div className="LoginScreen__input">
                  <form>
                    <input
                      type="email"
                      placeholder="Email Address"
                      name=""
                      id=""
                    />
                    <button onClick={() => setSignIn(true)} className="LoginScreen__getstarted">get started</button>
                  </form>
                </div>
              </>
            )

        }
      </div>
    </div>
  )
}

export default LoginScreen
