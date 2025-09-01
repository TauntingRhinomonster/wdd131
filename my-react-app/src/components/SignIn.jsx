import { useState, useEffect } from 'react';
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Routes, Route, useNavigate, Link, Navigate} from 'react-router-dom';

function SignIn() {
    const [formData, setFormData] = useState({
        email: '', // Changed from 'username' to 'email' for clarity
        password: '',
    });

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            console.log("User signed in successfully!");
            // The onAuthStateChanged listener will automatically update the user state.
            navigate('/media');
        } catch (error) {
            let errorMessage = "Failed to sign in. Please check your credentials.";
            // Provide more specific error messages based on Firebase error codes
            if (error.code === 'auth/invalid-credential') {
                errorMessage = "Invalid email or password. Please try again.";
            } else if (error.code === 'auth/user-disabled') {
                errorMessage = "This user account has been disabled.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "The email address is not valid.";
            }
            console.error("Error signing in:", error.message);
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
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password-input">Password</label>
                        <input 
                            type="password" // Use type="password" for security
                            id='password-input'
                            name='password'
                            value={formData.password}
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </main>
            <footer>
                <p>Don't have an account?</p>
                <p><Link to="/SignUp">Sign Up</Link></p>
            </footer>
        </div>
    );
}

export default SignIn;