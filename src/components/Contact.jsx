import React, {useState} from "react";
import Header from "./Header";
import ContactCSS from "../assets/css/contact.css";
import Footer from "./Footer";
import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import { checkmarkCircleOutline } from "ionicons/icons";
import { person } from "ionicons/icons";
import { mail } from "ionicons/icons";
import Chatbot from "./chatbot";


import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
  Label
} from "reactstrap";

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
        <Form onSubmit={handleSubmitButton} id="form" className="contact-form">
          {/* <div class="form-divs success">  */}
          <div className={`form-divs ${valid}`}>
            {/* <Label htmlFor="first-name">First Name</Label> */}
            <InputGroup>
            <InputGroupText>  <IonIcon icon={person} />
 </InputGroupText>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="first-name"
              placeholder="Enter your first name"
            />
            </InputGroup>
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
            <InputGroup>
            <InputGroupText>  <IonIcon icon={person} />
 </InputGroupText>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="last-name"
              placeholder="Enter your last name"
            />
            </InputGroup>
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>{lastNameMessage}</small>
          </div>

          <div className={`form-divs ${validEmail}`}>
          <InputGroup>
    <InputGroupText>@</InputGroupText>
            <Input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" id="email" placeholder="Enter you email" />
           </InputGroup>
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>{emailMessage}</small>
          </div>
          <div className="form-divs">
            <InputGroup>
    <InputGroupText><IonIcon icon={mail} /> </InputGroupText>
            <Input type="text" id="message" rows='3' placeholder="Enter your message" />
            </InputGroup>
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>Error Message</small>
          </div>
          <Button color='primary' outline className="submit">SUBMIT</Button>
        </Form>
      </main>
      <Chatbot />



    </div>
  );
}
