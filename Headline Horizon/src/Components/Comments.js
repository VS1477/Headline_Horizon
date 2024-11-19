// Comments.js
import React, { useState } from 'react';

const Comments = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (name && comment) {
            const newComment = { name, text: comment };
            setCommentsList([...commentsList, newComment]);
            setName('');
            setComment('');
        } else {
            alert("Please enter both your name and comment before submitting.");
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div style={{ width: '100%', maxWidth: '700px', marginBottom: '30px' }}>
                <h2 style={{ textAlign: 'center' }}>Comments</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleNameChange}
                        style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={handleCommentChange}
                        style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                    <button 
                        onClick={handleCommentSubmit} 
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            alignSelf: 'flex-start'
                        }}
                    >
                        Submit
                    </button>
                </div>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {commentsList.map((comment, index) => (
                        <li 
                            key={index} 
                            style={{
                                backgroundColor: '#f9f9f9', 
                                padding: '10px', 
                                marginBottom: '10px', 
                                borderRadius: '5px',
                                border: '1px solid #ddd'
                            }}
                        >
                            <strong>{comment.name}:</strong> {comment.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Comments;
