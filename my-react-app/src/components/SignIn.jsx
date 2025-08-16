import { useState, useEffect } from 'react';
// Import Firebase functions and your auth object
import { auth } from '../firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from 'firebase/auth';

function SignIn() {
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
        <div>
            <button onClick={() => auth.signOut()}>Log Out</button>
        </div>
    );
    
};

export default SignIn;