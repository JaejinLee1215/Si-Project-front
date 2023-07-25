import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputBox from './components/search/Search';
import Login from './components/login/Login';
import Join from './components/login/Join';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<InputBox />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
