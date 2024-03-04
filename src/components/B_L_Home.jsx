import React, {useEffect, useState} from "react";
import Typewriter from 'typewriter-effect';
import OpenAI from "openai";
import sanitizeHtml from "sanitize-html";
import { Button, Input } from "reactstrap";
import {RingLoader} from 'react-spinners';
import FileUpload from "./FileUpload";
import B_L_Nav from './B_L_Nav';
import Footer from "./Footer";
import Chatbot from "./chatbot";


function CotntSum() {
    const [userText, setUserText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");
    const [fileName, setFileName] = useState("");
    const openai = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true,
    }); 

    async function main() {
      setLoading(true);
      const content = text ? text : userText;
        const completion = await openai.chat.completions.create({
            messages: [
                {
                  role: "system",
                  content: `As an AI designed to assist users in understanding complex documents, your role is to act as a friendly and comprehensive guide. Your primary function is to break down legal documents, financial resources, healthcare information, educational materials, and other challenging content into easily understandable explanations.
                  Once the document is provided, your responsibility is to generate user-friendly explanations for uncommon term, phrases, or concepts extracted from the document.
                  This response will be sent directly to the user, so insted of markdown use html to format the response.
                  Do not offer further assistance this is a one time response.
                  Tailor the breakdown to focus on the subject matter identified in the document, whether it's legal terms, financial terminology, healthcare procedures, educational concepts, or other relevant topics. It should almost be a walkthrough of the document, providing a clear and concise explanation of the content.
                  Here is your first document to breakdown: ${content}`,
                },
              ],
          model: "gpt-3.5-turbo",
        });
      
        setResponse(completion.choices[0].message.content);
        setLoading(false);
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
    <div >
      <B_L_Nav />
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
        
      </form>
      <Chatbot />
      <Footer />
    </div>
  )
}

export default CotntSum