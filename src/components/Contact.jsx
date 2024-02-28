import React, {useState} from "react";
import Header from "./Header";
import ContactCSS from "../assets/css/contact.css";

import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import { checkmarkCircleOutline } from "ionicons/icons";

export default function Contact() {
    
    const [firstName, setFirstName] = useState("");
    const [valid, setValid] = useState("");
    const [message, setMessage] = useState("");
  
    const [lastName, setLastName] = useState("");
    const [validLast, setValidLast] = useState("");
    const [lastNameMessage, setLastNameMessage] = useState("");
  
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
  
    const handleSubmitButton = (e) => {
      e.preventDefault();
      console.log("hello world");
      checkInputs();
      checkLastName();
      checkEmail()
      console.log(e.target.value);
    };
  
    const checkInputs = () => {
      if (firstName === "") {
        setValid("error");
        setMessage("Please enter your first name");
      } else {
        setValid("success");
        setMessage("Thank you for entering your first name");
      }
    };
  
    const checkLastName = () => {
      if (lastName === "") {
        setValidLast("error");
        setLastNameMessage("Please enter your last name");
      } else {
        setValidLast("success");
        setLastNameMessage("Thank you for entering your last name");
      }
    };
    const checkEmail = () => {
      if (email === '') {
        setValidEmail('error')
        setEmailMessage('Please enter your email')
      } else if (!isEmail(email)) {
        setEmailMessage('Email is not valid')
      } else {
        setValidEmail('success')
        setEmailMessage('Thank you for entering your email')
      }
    }
    const isEmail = (email) => {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
  

  return (
    <div>
      <Header />

      <main>
        <h2 className="contact-h2">Send Us a Message</h2>
        <form onSubmit={handleSubmitButton} id="form" className="contact-form">
          {/* <div class="form-divs success">  */}
          <div className={`form-divs ${valid}`}>
            <label htmlFor="first-name">First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="first-name"
              placeholder="Enter your first name"
            />
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            {/* <small className="success">hello</small> */}
            <small>{message}</small>
          </div>
          {/* <div class="form-divs error"> */}
          <div className={`form-divs ${validLast}`}>
            <label htmlFor="last-name">Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="last-name"
              placeholder="Enter your last name"
            />
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>{lastNameMessage}</small>
          </div>

          <div className={`form-divs ${validEmail}`}>
            <label htmlFor="email">Email</label>
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" id="email" placeholder="Enter you email" />
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>{emailMessage}</small>
          </div>
          <div className="form-divs">
            <label htmlFor="message">Message</label>
            <input type="text" id="message" placeholder="Enter your message" />
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>Error Message</small>
          </div>
          <button className="submit">SUBMIT</button>
        </form>
      </main>

    </div>
  );
}
