import React, { useState, useEffect, useRef } from "react";
import ChatContent from "./chatbot-content";
import ChatCSS from "../assets/css/chat-content.css";
import { FaRobot } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { TbRobot } from "react-icons/tb";

export default function Chatbot() {
  const [openChat, setOpenChat] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatContent, setChatContent] = useState([]);
  const [chatHistoryData, setChatHistoryData] = useState([]);

  const chatFieldRef = useRef(null);
  // adding the icon to the chatbot according to whether the user

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(chatInput);
    console.log("submit button clicked");
    getResponse();
  };

  const userInput = { text: "User input", fromUser: true };
  const chatAnswer = { text: "Chat input", fromUser: false };

  async function getResponse() {

    if (chatInput === "") {
      return;
    } else {
      setChatContent((prevChatContent) => [
        ...prevChatContent,
        { text: chatInput, fromUser: true },
      ]);
      setChatHistoryData((prevChatContent) => [...prevChatContent, chatInput]);
      const response = await fetch(
        `https://backend-capstone-5n46.onrender.com/chat?question=${chatInput}&history=${JSON.stringify(
          chatHistoryData
        )}`,
        {
          method: "POST",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const questions = JSON.stringify(data.content);
          if (data.content) {
            setChatHistoryData((prevChatContent) => [
              ...prevChatContent,
              data.content,
            ]);
            setChatContent((prevChatContent) => [
              ...prevChatContent,
              { text: data.content, fromUser: false },
            ]);
            console.log(chatHistoryData);
            // console.log(chatHistoryData[0]);
          }
        });

      setChatInput("");
    }
  }

  const handleCloseButton = (e) => {
    e.preventDefault();
    setOpenChat(false);
    setChatContent([]);
    setChatHistoryData([]);
  };

  const handleOpenButton = (e) => {
    e.preventDefault();
    setOpenChat(true);
    setChatContent([
      { text: "Hello! How can I assist you today?", fromUser: false },
    ]);
  };

  useEffect(() => {
    if (chatFieldRef.current) {
      chatFieldRef.current.scrollTop = chatFieldRef.current.scrollHeight;
    }
  }, [chatContent]);

  return (
    <div>
      <button className="open-modal" onClick={(e) => handleOpenButton(e)}>
        <TbRobot />
      </button>

      <ChatContent open={openChat} onClose={(e) => handleCloseButton(e)}>
        <div className="modal-container">
          <h3 className="chatbot-header">
            MessageBot
            <span className="circle-check">{<CiCircleCheck />}</span>
          </h3>
          <div className="chat-field" ref={chatFieldRef}>
            {/* <p>Hi! How can i assist you today?</p> */}
            {chatContent.map((message, index) => (
              <div
                key={index}
                className={message.fromUser ? "user-input" : "chat-answer"}
              >
                <div className="icons-div">
                  {message.fromUser ? <IoPerson /> : <FaRobot />}
                  <span className="time-date">
                    {" "}
                    {new Date().toLocaleTimeString()}{" "}
                  </span>
                </div>

                {message.text}
              </div>
            ))}
          </div>

          <div className="submit-field">
            <div className="chat-input">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                name="chat-inpute"
                id="chat-input"
                placeholder="Type your message here"
                col="40"
                rows="3"
              ></input>
              <button className="chat-submit" onClick={handleSubmitButton}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </ChatContent>
    </div>
  );
}