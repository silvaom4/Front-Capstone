import React, {useEffect, useState, useRef} from "react";
import Typewriter from 'typewriter-effect';
import OpenAI from "openai";
import sanitizeHtml from "sanitize-html";
import { Button, Input } from "reactstrap";
import {RingLoader} from 'react-spinners';
import FileUpload from "./FileUpload";
import Header from './Header';
import Footer from "./Footer";
import Chatbot from "./chatbot";
import Wave from 'react-wavify'



function CotntSum() {
    const [userText, setUserText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");
    const [fileName, setFileName] = useState("");
    const [loggedIn, setLoggedIn] = useState("");
    const [submitText, setSubmitText] = useState("Save Response");
    const section1Ref = useRef(null);

    useEffect(() => {
      if (localStorage.getItem('ID')) {
        setLoggedIn(false);
        setSubmitText("Save Response");
      } else {
        setLoggedIn(true);
        setSubmitText("Login to Save Response");
      }
    }, []);
    const openai = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true,
    }); 

    async function main() {
      setLoading(true);
      const content = text ? text : userText;

    const response =  fetch(
      `https://backend-capstone-5n46.onrender.com//summary?content=${content}`,
      {
        method: "POST",
      }
    ).then((res) => res.json())
    .then((data) => {setResponse(data.content);

      setLoading(false);
    });
  }
    function saveResponse() {
      fetch('http://localhost:4000/api/saveResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: localStorage.getItem('ID'),
          content: (String(document.getElementById('responceText').textContent)).replace(/\r?\n|\r/g, ""),
        })
      }).then(res => res.json())
    }  

    function handleChange(event) {
      setUserText(event.target.value);
    }
    function handleSubmit(event) {
      event.preventDefault();
      setSubmitted(!submitted);
    }
    useEffect(() => {
        if (submitted) {
        main().catch(console.error);
        }
    }, [submitted]);

    // function extractText(event) {
    //   const file = event.target.files[0];
    //   console.log(event.target.files);
    //   if (file) {
    //     pdfToText(file)
    //       .then((text) => setText(text))
    //       .catch((error) => console.error("Failed to extract text from pdf"));
    //   }
    //   }
      const sanitizeResponse = (htmlContent) => {
        return { __html: sanitizeHtml(htmlContent) };
      };
      const handleClear = (event) => {
        event.preventDefault();
        setUserText("");
        setResponse("");
        setText("");
        setSubmitted(false);
        setFileName("");
      };
      let typeTopic;

      new Typewriter(typeTopic, {
        strings: ['Hello', 'World'],
        autoStart: true,
      });
      const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };
      
  return (
    <div id='ContSum' >
      <Header />
      <form >
      <section id='typeWriter'>
      <div id="hero-text">
      <div>
              <h2 className="display-3 text-center" id="contsum" ><strong>Content Breakdown<br /> & <br />Summarization</strong></h2>
         <p>Enhance Your Understanding: iSummarize simplifies complex content into clear insights. 
        <br />Discover the power of efficient summarization for enhanced productivity and informed decision-making.
      </p>
      </div>
     <div id='hero-buttons'>
        <Button onClick={() => scrollToSection(section1Ref)} color='primary'>Summarize Content Now</Button>
        <Button color='primary'>SignUp/Login</Button>
     </div>
      </div>
      <Wave fill="#8965e0"
      className="wave"
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.3,
          points: 6
        }}
  />
  <section ref={section1Ref}>
     <h3 >Recive a Broken Down Summary For Any <Typewriter
  options={{
    strings: ['Financial', 'Legal', 'Medical', 'Educational', 'Technical', 'Type Of'],
    autoStart: true,
    loop: true,
  }}
/> Document.</h3> 
</section>
</section>
    <section id='typeTopic'>
      <FileUpload newFile={setText} newFileName={setFileName} />
      <section id="fileName">
      { fileName ? <h4 >File Name: {fileName}</h4> : null }
      </section>
      <section id="InputText">
        <Input
            id="userInputText"
            placeholder="Enter your text here"
            maxLength={20000}
            onChange={handleChange}
            rows="6"
            type="textarea"
            bsSize="lg"
          />
          { response ? <Button color="primary" outline type="button" onClick={handleClear}>Clear</Button> :<Button color="primary" outline type="button" onClick={handleSubmit}>Submit</Button> }
        </section>
        <section id='Loading'>
        <RingLoader color='#5e72e4' loading={loading} size={150} />
        </section>
        </section>

        { response ? <p id="responceText" dangerouslySetInnerHTML={sanitizeResponse(response)}></p> : null}
        <Chatbot />

        { response ? <Button color="primary" className="center" outline type="button" onClick={saveResponse} disabled={loggedIn}>{submitText}</Button> : null }
      </form>
      <Footer />
    </div>
  )
}

export default CotntSum