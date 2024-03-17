import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskManager from './componrnts/Home';
import Login from './componrnts/login';
import Signup from './componrnts/signup';
import Header from './componrnts/header';
import Footer from './componrnts/Footer';
import CoverPage from './componrnts/coverpage'; // Importing the CoverPage component

function App() {
  const [token, setToken] = useState(null); // State to hold the token

  const handleLogin = (accessToken) => {
    // Update the token in the state
    setToken(accessToken);
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/tasklist" element={<TaskManager />} />
        {/* Render the Login component only when /login route is accessed */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
