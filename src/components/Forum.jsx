import React from 'react'
import { useState, useEffect } from 'react'
import Posts from './Posts';
import '../assets/css/forum.css'
import Header from './Header';
import Chatbot from './chatbot';
import Footer from './Footer';
import {Input, Button, 
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
    Col
  } from 'reactstrap'

export default function Forum() {
    const [currentLength , setCurrentLength] = useState(0)
    const [forumPosts, setForumPosts] = useState([{}]);
    const loadForum = () => {
        fetch('https://backend-capstone-5n46.onrender.com/api/forum/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setForumPosts(data.posts)
        })
    }

    const postForum = (e) => {
        e.preventDefault();
        const post = document.getElementById('post').value
        const header = document.getElementById('header').value
        const userID = localStorage.getItem('ID')

        fetch('https://backend-capstone-5n46.onrender.com/api/forum/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: userID,
                header: header,
                post: post
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data.message)
            loadForum();
        })
    }
    

    useEffect(() => {
        loadForum();
    },[document.getElementById('post')]);
    const [exampleModal, setExampleModal] = useState(false);
    
    const toggleModal = () => {
        setExampleModal(!exampleModal);
    };

  return (
    <div>
        <Header />
        <h1 className='forum_title'>Forum</h1>
        <div className='forum_screen'>
        {(typeof forumPosts[0] === 'undefined') ? 
        <p>No posts</p> 
        : 
        forumPosts.map((post) => {
            return (
                <Posts {...post}/>
            )
        })}
        </div>

       
            {/* <InputGroup> */}
            <div className='Add_Modal'>
      {/* Button trigger modal */}
      <Button
        color="primary"
        type="button"
        onClick={toggleModal}
        outline
      >
        Add Post
      </Button>
      {/* Modal */}
      <Modal
        className="modal-dialog-centered"
        isOpen={exampleModal}
        toggle={toggleModal}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add Post
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
        <div className="modal-body">
        <form onSubmit={postForum}>
        <div id='create_post'>
        <form id='post_form'>
        <Input maxLength={"100"} id='header' placeholder='Enter Topic'/>

      <Input maxLength={"240"} id='post' rows='3' placeholder='Enter Message'/>
      </form>
      {/* </InputGroup> */}
      <div className='forum_bottom'>
        <p>{currentLength}/240</p>
        <Button color='primary' outline type='submit' onClick={toggleModal} id='post_btn'>Submit</Button>

        </div>
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
        </form>
        </div>
      </Modal>
    </div>

       
        <Chatbot />
        <Footer />
    </div>
  )
}