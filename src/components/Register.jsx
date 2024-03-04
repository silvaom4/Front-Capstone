import React from 'react'
import { Button, Input, FormGroup,InputGroup, InputGroupText } from "reactstrap";
import { useEffect, useState } from 'react';
import { IonIcon } from "@ionic/react";
import { person } from "ionicons/icons";
import Footer from './Footer';
import '../assets/css/login.css'
import B_L_Nav from './B_L_Nav';

export default function Register() {
    const [validFirstName, setValidFirstName] = useState(false)
    const [validLastName, setValidLastName] = useState(false)
    const [validUsername, setValidUsername] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)

    useEffect(() => {
        

        const isValid = () => {
            if (validFirstName && validLastName && validUsername && validEmail && validPassword) {
                document.getElementById('regBtn').disabled = false
            }
            else {
                document.getElementById('regBtn').disabled = true
            }
        }
        isValid()

        document.addEventListener('keyup', (e) => {
            const target = e.target;
            
            
            

            switch (target.id) {
                case 'regFirstName':
                    if (target.value.length <= 0) {
                        target.style.border = '1px solid red'
                        setValidFirstName(false)
                    }
                    else {
                        target.style.border = '1px solid green'
                        setValidFirstName(true)
                    }
                    break;
                case 'regLastName':
                    if (target.value.length <= 0) {
                        target.style.border = '1px solid red'
                        setValidLastName(false)
                    }
                    else {
                        target.style.border = '1px solid green'
                        setValidLastName(true)
                    }
                    break;
                case 'regUsername':
                    if (target.value.length <= 0) {
                        target.style.border = '1px solid red'
                        setValidUsername(false)
                    }
                    else {
                        target.style.border = '1px solid green'
                        setValidUsername(true)
                    }
                    break;
                case 'regEmail':
                    if (target.value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)){
                        target.style.border = '1px solid green'
                        setValidEmail(true)
                    }
                    else {
                        target.style.border = '1px solid red'
                        setValidEmail(false)
                    }
                    break;
                case 'regPassword':
                    if (target.value.length <= 7) {
                        target.style.border = '1px solid red'
                        setValidPassword(false)
                    }
                    else {
                        target.style.border = '1px solid green'
                        setValidPassword(true)
                    }
                    break;
                case 'confirmPassword':
                    if (target.value !== document.getElementById('regPassword').value) {
                        target.style.border = '1px solid red'
                        setValidPassword(false)
                    }
                    else {
                        target.style.border = '1px solid green'
                        setValidPassword(true)
                    }
                    break;
                default:
                    break;
            }
            
        })
    })

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
            if (data.message === 'User registered successfully') {
                localStorage.setItem('ID', data.user.UserID);
                localStorage.setItem('Username', data.user.Username);
                localStorage.setItem('Name', data.user.FirstName);
                localStorage.setItem('Admin', data.user.isAdmin);
                window.location.href = '/home'
            } else {
                console.log(data.message)
            }
        })
    }
  return (
    <div>
        <B_L_Nav />
    <div className='register'>
        
      <form onSubmit={register} className='login reglog'>
        <div >
      <FormGroup class='regNames'>
      <InputGroup>
                <InputGroupText className='inputGroup'>
                <IonIcon icon={person} />
    </InputGroupText>
            <Input
                name='regFirstName'
                id="regFirstName"
                placeholder="John"
                type="text"
            />
            </InputGroup>
            <InputGroup>
            <InputGroupText className='inputGroup'>
                <IonIcon icon={person} />
    </InputGroupText>
            <Input
                name='regLastName'
                id="regLastName"
                placeholder="Doe"
                type="text"
            />
            </InputGroup>
        </FormGroup>
    
        
        {/* <FormGroup>
        <span className='LastName'><InputGroup>
                <InputGroupText className='inputGroup'>
                <IonIcon icon={person} />
    </InputGroupText>
            <Input
                name='regLastName'
                id="regLastName"
                placeholder="Doe"
                type="text"
            />
            </InputGroup></span>
        </FormGroup> */}
        </div>
        <>
        <FormGroup>
        <InputGroup>
                <InputGroupText className='inputGroup'>
                <IonIcon icon={person} />
    </InputGroupText>
            <Input
                name='regUsername'
                id="regUsername"
                placeholder="Username"
                type="text"
            />
            </InputGroup>
        </FormGroup>
        </>
        <>
        <FormGroup>
        <InputGroup>
                <InputGroupText className='inputGroup'>
      @
    </InputGroupText>
            <Input
                name='regEmail'
                id="regEmail"
                placeholder="example@gmail.com"
                type="email"
            />
            </InputGroup>
        </FormGroup>
        </>
        <>
        <FormGroup>
        <InputGroup>
                <InputGroupText className='inputGroup'>
      🔒
    </InputGroupText>
            <Input
                name='regPassword'
                id="regPassword"
                placeholder="password"
                type="password"
            />
            </InputGroup>
     </FormGroup>
     </>
     <>
        <FormGroup>
        <InputGroup>
               <InputGroupText className='inputGroup'>
      🔒
    </InputGroupText>
            <Input
                name='confirmPassword'
                id="confirmPassword"
                placeholder="password"
                type="password"
            />
            </InputGroup>
        </FormGroup>
        </>
        <div className='regBottom'>
        <Button color="primary" outline type='submit' id='regBtn'>
          Register
        </Button>
        <a href='/login'>Have an account? Login</a>
        </div>
        {/* <input placeholder='John' id='regFirstName'></input>
        <input placeholder='Doe' id='regLastName'></input>
        <input placeholder='Johndoe123' id='regUsername'></input>
        <input placeholder='John@email.com' id='regEmail'></input>
        <input placeholder='password' id='regPassword'></input>
        <button>Register</button> */}
        
        
      </form>
    </div>
    <Footer />
    </div>
  )
}
