import React from 'react'

export default function Register() {
    const register = (e) => {
        e.preventDefault();
        const regFirstName = document.getElementById('regFirstName').value
        const regLastName = document.getElementById('regLastName').value
        const regUsername = document.getElementById('regUsername').value
        const regEmail = document.getElementById('regEmail').value
        const regPassword = document.getElementById('regPassword').value

        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: regFirstName,
                lastName: regLastName,
                username: regUsername,
                email: regEmail,
                password: regPassword
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data.message)
        })
    }
  return (
    <div>
      <form onSubmit={register}>
        <input placeholder='John' id='regFirstName'></input>
        <input placeholder='Doe' id='regLastName'></input>
        <input placeholder='Johndoe123' id='regUsername'></input>
        <input placeholder='John@email.com' id='regEmail'></input>
        <input placeholder='password' id='regPassword'></input>
        <button>Register</button>
        
        <a href='/login'>Have an account? Login</a>
      </form>
    </div>
  )
}
