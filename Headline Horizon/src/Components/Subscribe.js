import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubscribeClick = () => {
        setIsModalOpen(true); // Open modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail('');
            setIsModalOpen(false);
            navigate('/new-subscribe-page'); // Redirect after subscribing
        } else {
            alert('Please enter a valid email.');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // To make the div fill the entire viewport height
                backgroundColor: '#f4f4f4',
            }}
        >
            <button 
                onClick={handleSubscribeClick} 
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            >
                Subscribe
            </button>

            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: '0', left: '0', right: '0', bottom: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '5px',
                        width: '400px',
                        textAlign: 'center'
                    }}>
                        <h2>Subscribe to Headline Horizon</h2>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
                        />
                        <button onClick={handleSubscribe} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', marginRight: '10px' }}>Subscribe</button>
                        <button onClick={handleCloseModal} style={{ padding: '10px 20px', marginTop: '10px', background: 'gray', color: 'white', border: 'none' }}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Subscribe;
