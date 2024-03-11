import React from 'react'
import { Button, Input, FormGroup, InputGroup,InputGroupText, } from "reactstrap";
import '../assets/css/login.css'
import Header from './Header';
import Footer from './Footer';

export default function Login() {
    const login = (e) => {
        const loginEmail = document.getElementById('login_email').value
        const loginPassword = document.getElementById('login_password').value
        e.preventDefault();
        
        fetch('https://backend-capstone-5n46.onrender.com/api/login', {
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
            if (data.message !== 'User logged in successfully') {
                document.querySelector('.loginStatus').innerHTML = data.message;
                document.querySelector('.loginStatus').style.color = 'red';
                return
            } else {
                document.querySelector('.loginStatus').innerHTML = 'Login Successful';
                document.querySelector('.loginStatus').style.color = 'green';

                localStorage.clear();
                localStorage.setItem('ID', data.user.UserID);
                localStorage.setItem('Username', data.user.Username);
                localStorage.setItem('Name', data.user.FirstName);
                localStorage.setItem('Admin', data.user.isAdmin);
                
                window.location.href = '/home';
            }
            
        })
    }
  return (
    <>
      <Header />
    <div>
    <div className='login_form'>
        <div className='login_input'>
        <form onSubmit={login} className='login'>
            {/* <input placeholder='John@example.com' id='login_email' type='text'></input> */}
            <div>
              <section>
            <FormGroup floating >
  <InputGroup>
    <InputGroupText className='inputGroup'>@</InputGroupText >
    <Input
      id="login_email"
      placeholder="example@example.com"
      type="email"
    />
  </InputGroup>
</FormGroup>
</section>
<section>
              <FormGroup>
                <InputGroup>
                <InputGroupText className='inputGroup'>
      🔒
    </InputGroupText>
                <Input
                  id="login_password"
                  placeholder="password"
                  type="password"
                />
              </InputGroup>
              </FormGroup>
              </section>
              </div>
              <div className='login_bottom'>
                <p className='loginStatus'></p>
            <Button color="primary" outline type='submit'>
          Login
        </Button>
            <a href="/register">Don't have an account? Register Here</a>
            </div>
        </form>
        </div>
    </div>
    </div> 
    <Footer />
    </> 
  )
}
