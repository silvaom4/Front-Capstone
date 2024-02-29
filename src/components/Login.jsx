import React from 'react'
import { Button, Input, FormGroup } from "reactstrap";
import '../assets/css/login.css'

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
                window.location.href = '/';
            }
            
        })
    }
  return (
    <div>
    <div className='login_form'>
        <div className='login_input'>
        <form onSubmit={login}>
            {/* <input placeholder='John@example.com' id='login_email' type='text'></input> */}
            <div>
            <FormGroup>
                <Input
                  id="login_email"
                  placeholder="name@example.com"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="login_password"
                  placeholder="password"
                  type="password"
                />
              </FormGroup>
              </div>
              <div className='login_bottom'>
            <Button color="primary" outline type='submit'>
          Login
        </Button>
            <a href="/register">Don't have an account? Register Here</a>
            </div>
        </form>
        </div>
    </div>
    </div>  
  )
}
