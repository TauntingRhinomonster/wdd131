import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Media from './components/Media.jsx';
import Menu from './components/Menu.jsx';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    setIsSubmitted(true);
  }

  return (
    <div>
      <Header />
      {!isSubmitted ? (
        <div id='mainContent'>
          <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
            <div>
              <h2>Sign-In</h2>
              <label>
                Username: <br />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  placeholder="Enter your username"
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
              Submit
            </button>
            <a href="https://www.flaticon.com/free-icons/joy-stick" title="joy stick icons">Joy stick icons created by Vectorsclub - Flaticon</a>
          </form>
          <Footer />
        </div>
      ) : (
        <div>
          <Media />
          <Menu />
        </div>
      )}
    </div>
  );
}

export default App
