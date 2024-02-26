import React, {useEffect, useState} from "react";
import OpenAI from "openai";
import pdfToText from 'react-pdftotext';
import sanitizeHtml from "sanitize-html";
import { Button } from "reactstrap";



function CotntSum() {
    const [userText, setUserText] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [response, setResponse] = useState("");
    const [text, setText] = useState("");
    const openai = new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true,
    }); 

    async function main() {
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
        console.log(userText)
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

    function extractText(event) {
      const file = event.target.files[0];
      if (file) {
        pdfToText(file)
          .then((text) => setText(text))
          .catch((error) => console.error("Failed to extract text from pdf"));
      }
      }
      const sanitizeResponse = (htmlContent) => {
        return { __html: sanitizeHtml(htmlContent) };
      };
      
  
  return (
    <div>
      <form>
      <input type="file" accept="application/pdf" onChange={extractText} />
        <input type="text" placeholder="Enter your text here" maxLength={20000} onChange={handleChange}/>
        <Button color="primary" outline type="button" onClick={handleSubmit}>Submit</Button>
        <p dangerouslySetInnerHTML={sanitizeResponse(response)}></p>
      </form>
    </div>
  )
}

export default CotntSum