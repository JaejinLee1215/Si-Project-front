import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputBox from './components/InputBox/InputBox';
import Login from './components/Login/Login';
import Join from './components/Login/Join';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/search" element={<InputBox />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
