import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProfileCSS from "../assets/css/profile.css";
import ProfileStockImage from "../assets/img/brand/stock-profile-img.jpeg";
import ProfileStockImage2 from "../assets/img/brand/stock-avatar.png";
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from "reactstrap";

export default function Profile() {
  const [profile, setProfile] = useState([{}]);

  const [exampleModal, setExampleModal] = useState(false);
  const [passwordModal, setpasswordModle] = useState(false);

  const toggleModal = () => {
    setExampleModal(!exampleModal);
  };
  const togglePassModal = () => {
    setpasswordModle(!passwordModal);
  };

  const [summaries, setSummaries] = useState([{}]);

    useEffect(() => {
        fetch('https://backend-capstone-5n46.onrender.com/api/profile', {
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


    fetch("/api/profile/loadSummaries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: localStorage.getItem("ID"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSummaries(data.summaries);
        console.log(data);
      });
  }, []);


    const logout = () => {
        localStorage.clear();
        window.location.href = 'https://backend-capstone-5n46.onrender.com/login';
    }

    const login = () => {
        window.location.href = 'https://backend-capstone-5n46.onrender.com/login';
    }

    const changeUserName = (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value
        fetch('https://backend-capstone-5n46.onrender.com/api/profile/changeUsername', {
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
        fetch('https://backend-capstone-5n46.onrender.com/api/profile/changePassword', {
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

      <section>
        <h1 className="profile-h1">Settings</h1>
      </section>

      
      <div className="profile">
        {typeof profile[0] === "undefined" ? (

          <div>
            <p>Profile not found</p>
            <button onClick={login}>Login or Register?</button>
          </div>

        ) : (
            
          <div className="login-results">
            <img className="stock-avatar" src={ProfileStockImage2} alt="Stock avatar" />
            <h2>{profile[0].Username}</h2>
            {/* <img src={profile[0].ProfilePicture} alt='Profile Picture'></img> */}
            <p>
              {profile[0].FirstName} {profile[0].LastName}
            </p>
            <p>{profile[0].Email}</p>

            {/* <form onSubmit={changeProfilePicture}>
                    <input type='file' id='profilePicture'></input>
                    <button type='submit'>Change Profile Picture</button>


                </form> */}
          
        
          </div>
        )}
  <div className="settings-buttons">

    <Button className="setting-btn" color="primary" type="button" onClick={toggleModal} outline>
              Change Username
            </Button>
            {/* Modal */}
            <Modal
              className="modal-dialog-centered"
              isOpen={exampleModal}
              toggle={toggleModal}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Change Username
                </h5>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={toggleModal}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body-username">
                <form className="modal-username-form" onSubmit={changeUserName}>
                  <label htmlFor="newUsername">New Username</label>
                  <input
                    type="text"
                    id="newUsername"
                    placeholder="New Username"
                  ></input>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                  ></input>
                  <p id="alertMsg"></p>
                  <Button type="submit">Change Username</Button>
                </form>
              </div>
              <div className="modal-footer">
                <Button
                  color="secondary"
                  data-dismiss="modal"
                  type="button"
                  onClick={toggleModal}
                >
                  Close
                </Button>
              </div>
            </Modal>

            <Button
            className="setting-btn"
              color="primary"
              type="button"
              onClick={togglePassModal}
              outline
            >
              Change Password
            </Button>
            {/* Modal */}
            <Modal
              className="modal-dialog-centered"
              isOpen={passwordModal}
              toggle={togglePassModal}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Change Password
                </h5>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={togglePassModal}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body-password">
                <form className="modal-password-form" onSubmit={changePassword}>
                  <label htmlFor="oldPassword">Old Password</label>
                  <input
                    type="password"
                    id="oldPassword"
                    placeholder="Old Password"
                  ></input>
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="New Password"
                  ></input>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  ></input>
                  <p id="passAlertMsg"></p>
                  <Button type="submit">Change Password</Button>
                </form>
              </div>
              <div className="modal-footer">
                <Button
                  color="secondary"
                  data-dismiss="modal"
                  type="button"
                  onClick={togglePassModal}
                >
                  Close
                </Button>
              </div>
            </Modal>

            <Button className="setting-btn" color="primary" outline onClick={logout}>
              logout
            </Button>


            </div>

      </div>
      <Footer />
    </div>
  );
}
