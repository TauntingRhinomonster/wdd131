import { useState, useEffect } from 'react';
// Import Firebase functions and your auth object
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from 'firebase/auth';

function SignUp() {
    const [formData, setFormData] = useState({
        username: '', // This will be used as the email for Firebase Authentication
        password: '',
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

    // Handle sign-in submission
    async function handleSubmit(e) {
        e.preventDefault();
        try {
        // Use Firebase's signInWithEmailAndPassword
        await signInWithEmailAndPassword(auth, formData.username, formData.password);
        // The `onAuthStateChanged` listener will update the user state automatically.
        console.log("User signed in successfully!");
        } catch (error) {
        console.error("Error signing in:", error.message);
        alert("Failed to sign in. Please check your credentials.");
        }
    }


    return (
        <div id='sign-in-widget'>
            <header className='logo-container'>
                <img id='logo-img' src='images\joy-stick.png' alt='Game Space logo icon'/>
                <img id='logo-img' src='images\logo-title.png' alt='Game Space logo text'/>
            </header>
            <main>
                <form action="">
                    <div>
                        <label htmlFor="username-input">Username</label>
                        <input 
                            type="text"
                            id='username-input'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password-input">Password</label>
                        <input 
                            type="text"
                            id='password-input'
                            value={formData.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="password-input">Confirm Password</label>
                        <input 
                            type="text"
                            id='password-input'
                            value={formData.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="password-input">Email</label>
                        <input 
                            type="email"
                            id='password-input'
                            value={formData.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="password-input">Confirm Email</label>
                        <input 
                            type="email"
                            id='password-input'
                            value={formData.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="password-input">Password</label>
                        <input 
                            type="text"
                            id='password-input'
                            value={formData.password}
                            onChange={handleChange} 
                        />
                    </div>
                    <button>Sign In</button>
                </form>
            </main>
            <footer>
                <p>Don't have an account?</p>
                <p><a href="#">Sign Up</a></p>
            </footer>
        </div>
    )
}

export default SignUp;