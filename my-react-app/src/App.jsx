// src/App.js

import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Media from './components/Media.jsx';
import Menu from './components/Menu.jsx';

// Import Firebase functions and your auth object
import { auth } from './firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from 'firebase/auth';


function App() {
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
      <Header />
      {user ? (
        // Render content for logged-in users
        <div>
          <Media />
          <Menu />
          <button onClick={() => auth.signOut()}>Log Out</button>
        </div>
      ) : (
        // Render sign-in form for logged-out users
        <div id='mainContent'>
          <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
            <div>
              <h2>Sign-In</h2>
              <label>
                Email: <br />
                <input
                  type="email" // Changed to type "email" for Firebase Auth
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <div>
              <label>
                Password: <br />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </label>
            </div>
            <button type="submit" style={{ marginTop: '0.5rem' }}>
              Sign In
            </button>
            <a href="https://www.flaticon.com/free-icons/joy-stick" title="joy stick icons">Joy stick icons created by Vectorsclub - Flaticon</a>
          </form>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;