import React, { useState } from 'react';
import './main.css';
import LoginForm from './forms/LoginForm';
import AdminPanel from './forms/AdminPanel';


function App() {
  const [form, setForm] = useState("LoginForm");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailHandler (e) {
    setEmail(e.target.value);
  }

  function passwordHandler (e) {
    setPassword(e.target.value);
  }

  function renderForm () {  
    if (form === "LoginForm") {
      return (
        <LoginForm 
          email={email}
          emailHandler={emailHandler}
          password={password}
          passwordHandler={passwordHandler}
          moveToAdminPanel={() => setForm("AdminPanel")}
        />
      )
    }
    return (
      <AdminPanel 
        email={email}
      />
    )
  }
  
  return (
    <div id="App">
      <div className='wrapper'>
        <div className='wrapper__content'>
          {renderForm()}
        </div>
      </div>
    </div>
  );
}

export default App;
