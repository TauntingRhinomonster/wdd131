import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import SignIn from './components/SignIn.jsx'; // Correctly imported from its location
import SignUp from './components/SignUp.jsx';
import Media from './components/Media.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;