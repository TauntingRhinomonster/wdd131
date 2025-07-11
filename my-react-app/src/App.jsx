import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

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
    setSubmittedData(formData);
    setFormData({ username: '', password: '' }); // reset form
    window.location.href = '';
  }

  return (
    <div>
      <Header />
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <div>
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
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.password}</p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App
