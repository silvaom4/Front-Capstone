import React, {useEffect, useState} from "react";
import Typewriter from 'typewriter-effect';
import OpenAI from "openai";
import sanitizeHtml from "sanitize-html";
import { Button, Input } from "reactstrap";
import {RingLoader} from 'react-spinners';
import FileUpload from "./FileUpload";
import Header from './Header';
import Footer from "./Footer";
import Chatbot from "./chatbot";


function CotntSum() {
    const [userText, setUserText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");
    const [fileName, setFileName] = useState("");
    const [loggedIn, setLoggedIn] = useState("");
    const [submitText, setSubmitText] = useState("Save Response");

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
      `http://localhost:4000/summary?content=${content}`,
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
      
  return (
    <div id='ContSum' >
      <Header />
      <form >
      {/* <input type="file" accept="application/pdf" onChange={extractText} /> */}
      <section id='typeWriter'>
      <h3 className="display-3 text-muted" >Content Breakdown & Summarization</h3>
     <h3 >Recive a Broken Down Summary For Any <Typewriter
  options={{
    strings: ['Financial', 'Legal', 'Medical', 'Educational', 'Technical', 'Type Of'],
    autoStart: true,
    loop: true,
  }}
/> Document.</h3> 
</section>

      <FileUpload newFile={setText} newFileName={setFileName} />
      <section id="fileName">
      { fileName ? <h4 >File Name: {fileName}</h4> : null }
      </section>
      <section id="InputText">
        <Input
            // id="exampleFormControlTextarea1"
            placeholder="Enter your text here"
            maxLength={20000}
            onChange={handleChange}
            rows="6"
            type="textarea"
            bsSize="sm"
          />
          { response ? <Button color="primary" outline type="button" onClick={handleClear}>Clear</Button> :<Button color="primary" outline type="button" onClick={handleSubmit}>Submit</Button> }
        </section>
        <section id='Loading'>
        <RingLoader color='#5e72e4' loading={loading} size={150} />
        </section>
        { response ? <p id="responceText" dangerouslySetInnerHTML={sanitizeResponse(response)}></p> : null}

        <Chatbot />

        { response ? <Button color="primary" outline type="button" onClick={saveResponse} disabled={loggedIn}>{submitText}</Button> : null }

      </form>
      <Footer />
    </div>
  )
}

export default CotntSum