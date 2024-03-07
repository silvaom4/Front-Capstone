import React from "react";
import { useState, useEffect } from "react";
import Posts from "./Posts";
import "../assets/css/forum.css";
import Header from "./Header";
import Chatbot from "./chatbot";
import Footer from "./Footer";
import { Input } from "reactstrap";

export default function Forum() {
  const [currentLength, setCurrentLength] = useState(0);
  const [forumPosts, setForumPosts] = useState([{}]);
  const loadForum = () => {
    fetch("https://backend-capstone-5n46.onrender.com/api/forum/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setForumPosts(data.posts);
      });
  };

  const postForum = (e) => {
    e.preventDefault();
    const post = document.getElementById("post").value;
    const header = document.getElementById("header").value;
    const userID = localStorage.getItem("ID");

    fetch("https://backend-capstone-5n46.onrender.com/api/forum/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userID,
        header: header,
        post: post,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        loadForum();
      });
  };

  useEffect(() => {
    const post = document.getElementById("post");
    loadForum();

    post.addEventListener("input", (e) => {
      setCurrentLength(post.value.length);
    });

    if (localStorage.getItem("ID") === null) {
      document.getElementById("header").disabled = true;
      document.getElementById("post").disabled = true;
      document.getElementById("header").placeholder = "Login to post";
      document.getElementById("post").placeholder = "Login to post";
      document.getElementById("post_btn").disabled = true;
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="forum_screen">
        {typeof forumPosts[0] === "undefined" ? (
          <p>No posts</p>
        ) : (
          forumPosts.map((post) => {
            return <Posts {...post} />;
          })
        )}
      </div>

      <form onSubmit={postForum}>
        <div id="create_post">
          <Input maxLength={"100"} id="header" placeholder="Enter Topic" />
          <Input
            maxLength={"499"}
            id="post"
            rows="3"
            placeholder="Enter Message"
          />
          <div className="forum_bottom">
            <p>{currentLength}/499</p>
            <button type="submit" id="post_btn">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Chatbot />
      <Footer />
    </div>
  );
}
