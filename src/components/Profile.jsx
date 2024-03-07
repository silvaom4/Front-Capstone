import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'

export default function Profile() {
    const [profile, setProfile] = useState([{}])
    const [summaries, setSummaries] = useState([{}])
    useEffect(() => {
        fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: localStorage.getItem('ID')
            })
        }).then(res => res.json())
        .then(data => {
            setProfile(data.profile)
        })

        fetch('/api/profile/loadSummaries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: localStorage.getItem('ID')
            })
        }).then(res => res.json())
        .then(data => {
            setSummaries(data.summaries)
            console.log(data)

        })
    },[]);

    const logout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    const login = () => {
        window.location.href = '/login';
    }

    const changeUserName = (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value
        fetch('/api/profile/changeUsername', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: localStorage.getItem('ID'),
                password: document.getElementById('password').value,
                username: localStorage.getItem('Username'),
                newUsername: newUsername
            })
        }).then(res => res.json())
        .then(data => {
            if (data.message !== 'Username changed successfully') {
                document.getElementById('alertMsg').innerHTML = data.message;
                document.getElementById('alertMsg').style.color = 'red'
                return
            } else {
                console.log(data.message)
                document.getElementById('alertMsg').innerHTML = 'Username changed successfully'
                document.getElementById('alertMsg').style.color = 'green'
                localStorage.setItem('Username', newUsername)
                window.location.href = '/profile'
            }
        })
    }

    const changePassword = (e) => {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value
        fetch('/api/profile/changePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: localStorage.getItem('ID'),
                oldPassword: document.getElementById('oldPassword').value,
                newPassword: newPassword
            })
        }).then(res => res.json())
        .then(data => {
            if (data.message !== 'Password changed successfully') {
                document.getElementById('passAlertMsg').innerHTML = data.message;
                document.getElementById('passAlertMsg').style.color = 'red'
                return
            } else {
                console.log(data.message)
                document.getElementById('passAlertMsg').innerHTML = 'Password changed successfully'
                document.getElementById('passAlertMsg').style.color = 'green'
            }
        })
    }

    // const changeProfilePicture = (e) => {
    //     e.preventDefault();
    //     const picture = document.getElementById('profilePicture').files[0]
    //     const userID = localStorage.getItem('ID')
    //     const formData = new FormData()
    //     formData.append('userID', userID)
    //     formData.append('picture', picture)

    //     fetch('/api/profile/changeProfilePicture', {
    //         method: 'POST',
    //         body: formData
    //     }).then(res => res.json())
    //     .then(data => {
    //         console.log(data.message)
    //         window.location.href = '/profile'
    //     })
    // }
  return (
    <div>
        <Header />
        <div className='profile'>
        {(typeof profile[0] === 'undefined') ?
        <div>
            <p>Profile not found</p>
            <button onClick={login}>Login or Register?</button>
        </div>
            :
            <div>
                <h1>{profile[0].Username}</h1>
                {/* <img src={profile[0].ProfilePicture} alt='Profile Picture'></img> */}
                <p>{profile[0].FirstName} {profile[0].LastName}</p>
                <p>{profile[0].Email}</p>

                {/* <form onSubmit={changeProfilePicture}>
                    <input type='file' id='profilePicture'></input>
                    <button type='submit'>Change Profile Picture</button>


                </form> */}

                <form onSubmit={changeUserName}>
                    <label htmlFor='newUsername'>New Username</label>
                    <input type='text' id='newUsername' placeholder='New Username'></input>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Password'></input>
                    <p id='alertMsg'></p>
                    <button type='submit'>Change Username</button>
                </form>

                <form onSubmit={changePassword}>
                    <label htmlFor='oldPassword'>Old Password</label>
                    <input type='password' id='oldPassword' placeholder='Old Password'></input>
                    <label htmlFor='newPassword'>New Password</label>
                    <input type='password' id='newPassword' placeholder='New Password'></input>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' id='confirmPassword' placeholder='Confirm Password'></input>
                    <p id='passAlertMsg'></p>
                    <button type='submit'>Change Password</button>
                </form>
                <button onClick={logout}>logout</button>

                <div>
                    <h1>Summaries</h1>
                    {(typeof summaries[0] === 'undefined') ?
                    <p>No summaries</p>
                    :
                    summaries.map((summary) => {
                        return (
                            <div>
                                <p>{summary.content}</p>
                            </div>
                        )
                    })}
            </div>
            </div>
        }
        </div>
      
    </div>
  )
}
