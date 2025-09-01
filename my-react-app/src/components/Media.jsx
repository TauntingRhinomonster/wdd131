import React, { useState, useEffect } from 'react';
import { auth } from '../firebase.js'; // Import your Firebase auth object
import { onAuthStateChanged } from 'firebase/auth'; // Import the listener
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';

function Media() {
    // State to hold the user object
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); // State to handle initial loading

    // Use a listener to get real-time authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Authentication state has been checked
        });
        // Cleanup the listener when the component unmounts
        return () => unsubscribe(); 
    }, []);

    // Show a loading message while Firebase checks the user's status
    if (loading) {
        return <div>Loading...</div>;
    }

    // Conditionally render based on authentication state
    if (user) {
        // This is the content for authenticated users
        return (
            <div>
                <h1>Welcome, {user.email}!</h1>
                <p>This is your protected media content.</p>
                {/* You can add your images, videos, etc., here */}
            </div>
        );
    } else {
        // This is the content for users who are not logged in
        return (
            <div>
                <h1>Access Denied</h1>
                <p>Please <Link to="/">sign in</Link> to view this content.</p>
            </div>
        );
    }
}

export default Media;