import React from "react";
import ErrorCSS from "../assets/css/404.css";
import Chatbot from "./chatbot";
import Header from "./Header";
import Footer from "./Footer";
import ErrorImage1 from "../assets/img/error-page/error-page1.jpeg";
import ErrorImage2 from "../assets/img/error-page/error-page-2.jpeg";
import ErrorImage3 from "../assets/img/error-page/error-page-3.jpeg";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <Header />

      <h1 className="error-h1">Oops!</h1>
      {/* <img src={ErrorImage1} alt="error" className='error-img'/> */}
      
      <img src={ErrorImage2} alt="error" className="error-img glow-border" />
      {/* <img src={ErrorImage3} alt="error" className='error-img'/> */}
      <p className="error-p">Seems like you are lost, lets get you back!</p>
      <button className="error-btn" href="/contact">
        <Link to="/home">Go Home</Link>
      </button>
      <Footer />
    </div>
  );
}


