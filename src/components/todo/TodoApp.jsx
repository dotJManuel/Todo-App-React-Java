import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
  return (
      <div className="TodoApp">
          <LoginComponent />
      </div>
  )
}

function LoginComponent() {

  const [username, setUserName] = useState('in28minutes')
  const [password, setPassword] = useState('dummy')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  function handleUserNameChange(event) {
    setUserName(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function handleSubmit() {
    if(username==='in28minutes' && password==='dummy'){
        setShowSuccessMessage(true)
        setShowErrorMessage(false)
    } else {
        setShowSuccessMessage(false)
        setShowErrorMessage(true)
    }
  }

  return (
      <div className="Login">
        {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
        {showErrorMessage && <div className="errorMessage">Authentication Failed.
                                                Please check your credentials.</div>}
        <div className="LoginForm">
            <div>
                <label>User Name:</label>
                <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
              <button type="button" name="login" onClick={handleSubmit}>login</button>
            </div>
        </div>
      </div>
  )
}

