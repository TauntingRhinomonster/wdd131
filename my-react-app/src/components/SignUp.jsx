import { useState, useEffect } from 'react';
// Import Firebase functions and your auth object
import { auth } from '../firebase.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth } from 'firebase/auth';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [user, setUser] = useState(null); // State to hold the logged-in user object

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Cleanup the listener on component unmount
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    // Handle sign-up submission
    async function handleSubmit(e) {
        e.preventDefault();

        // ⚠️ Step 1: Add validation to ensure passwords match.
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        try {
            // 🔑 Step 2: Use Firebase's createUserWithEmailAndPassword
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            
            // Log the newly created user's data
            console.log("User created successfully:", userCredential.user);
            
            // The `onAuthStateChanged` listener will update the user state automatically.
            alert("Account created successfully! You are now logged in.");

        } catch (error) {
            // ⛔️ Handle different Firebase errors
            let errorMessage = "Failed to create an account. Please try again.";
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = "This email is already in use.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "The email address is not valid.";
            } else if (error.code === 'auth/weak-password') {
                errorMessage = "The password is too weak. It must be at least 6 characters long.";
            }
            console.error("Error creating account:", error.message);
            alert(errorMessage);
        }
    }

    return (
        <div id='sign-in-widget'>
            <header className='logo-container'>
                <img id='logo-img' src='images\joy-stick.png' alt='Game Space logo icon'/>
                <img id='logo-img' src='images\logo-title.png' alt='Game Space logo text'/>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email-input">Email</label>
                        <input 
                            type="email"
                            id='email-input'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required // HTML5 validation for email
                        />
                    </div>
                    <div>
                        <label htmlFor="password-input">Password</label>
                        <input 
                            type="password" // Use type="password" to hide input
                            id='password-input'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password-input">Confirm Password</label>
                        <input 
                            type="password"
                            id='confirm-password-input'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    {/* The rest of the form fields (username, DOB) are not directly handled by Firebase Auth but can be saved to Firestore or Realtime Database after sign-up. */}
                    <button type="submit">Sign Up</button>
                </form>
            </main>
            <footer>
                <p>Already have an account?</p>
                <p><Link to="/">Sign In</Link></p>
            </footer>
        </div>
    )
}

export default SignUp;