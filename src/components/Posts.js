import React from 'react'
import { useState, useEffect } from 'react'

export default function Posts(props) {
    const [replies, setReplies] = useState([{}])
    const loadReplies = () => {
        fetch('/api/forum/replies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                postID: props.forumID
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setReplies(data.replies)
        })
    }

    const postReply = (e) => {
        e.preventDefault();
        const reply = document.getElementById(props.forumID).value
        const userID = localStorage.getItem('ID')

        fetch('/api/forum/reply', {
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
            console.log(data.message)
            loadReplies();
        })
    }
    useEffect(() => {
        loadReplies();
    },[])
  return (
    <div>
        <div className='post'>
        <h1>{props.HeaderContent}</h1>
        <p>{props.Username}</p>
        <p>{props.Content}</p>
        </div>
        <div>
            {(typeof replies[0] === 'undefined') ?
            <p>No replies</p>
            :
            replies.map((reply) => {
                return (
                    <div className='replies'>
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
