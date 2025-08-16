import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Media from './components/Media.jsx';
import Menu from './components/Menu.jsx';
import SignIn from './components/SignIn.jsx';

// Import Firebase functions and your auth object
import { auth } from './firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from 'firebase/auth';


function App() {
  return (
    <div>
      <SignIn/>
    </div>
  );
}

export default App;