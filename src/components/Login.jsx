import React from 'react'

export default function Login() {
    const login = (e) => {
        const loginEmail = document.getElementById('login_email').value
        const loginPassword = document.getElementById('login_password').value
        e.preventDefault();
        
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword
            })
        }).then(res => res.json())
        .then(data => {
            if (data.user === undefined) {
                console.log(data.message)
                return
            } else {
                localStorage.clear();
                localStorage.setItem('ID', data.user.UserID);
                localStorage.setItem('Username', data.user.Username);
                localStorage.setItem('Name', data.user.FirstName);
                localStorage.setItem('Admin', data.user.isAdmin);
                console.log(data.message)
            }
            
        })
    }
  return (
    <div>
        <div>
        <form onSubmit={login}>
            <input placeholder='John@example.com' id='login_email' type='text'></input>
            <input placeholder='password' id='login_password' type='password'></input>
            <button>Login</button>
            <a href="/register">Don't have an account? Register Here</a>
        </form>
        </div>
    </div>
  )
}
