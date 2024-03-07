import React from 'react'
import { useState, useEffect } from 'react'

export default function Posts(props) {
    const [replies, setReplies] = useState([{}])
    const [replyDate, setReplyDate] = useState([{}])
    const date = new Date(props.dateAdded).toLocaleString()
    const isAdmin = props.isAdmin === 1 ? '• Admin' : '';

    const loadReplies = async() => {
        await fetch('https://backend-capstone-5n46.onrender.com/api/forum/replies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postID: props.forumID
            })
        }).then(res => res.json())
        .then(data => {
            setReplies(data.replies)
            setReplyDate(data.replies.dateAdded)
        })
    }

    const postReply = (e) => {
        e.preventDefault();
        const reply = document.getElementById(props.forumID).value
        const userID = localStorage.getItem('ID')

        fetch('https://backend-capstone-5n46.onrender.com/api/forum/reply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: userID,
                postID: props.forumID,
                reply: reply
            })
        }).then(res => res.json())
        .then(data => {
            loadReplies();
        })
    }
    useEffect(() => {
        loadReplies();
    },[document.getElementById(props.forumID)]);
  return (
    <div>
        <div className='post'>
        <h1>{props.HeaderContent}</h1>
        <p>{props.Username} {isAdmin} {date}</p>
        <p>{props.Content}</p>
        </div>
        <div>
            {(typeof replies[0] === 'undefined') ?
            <p>No replies</p>
            :
            replies.map((reply) => {
                return (
                    <div className='replies'>
                        <p>{reply.Username} {reply.isAdmin === 1 ? '• Admin' : ''} {new Date(reply.dateAdded).toLocaleString()}</p>
                        <p>{reply.Content}</p>
                    </div>
                )
            })}
            <input id={props.forumID} />
            <button onClick={postReply}>Reply</button>
            </div>
    </div>
  )
}
