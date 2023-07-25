import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css'

const Join = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleJoin = () => {
    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    // spring boot 연동 코드
    
  };

  return (
    <div className="join-box">
      <h2>회원가입 페이지</h2>
  
      <div className="input-container">
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="username">Username</label>
      </div>
  
      <div className="input-container">
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
      </div>
  
      <div className="input-container">
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password">Check Password</label>
      </div>
  
      <button onClick={handleJoin}>submit</button>
      <p>이미 회원이신가요? <Link to="/login">로그인 페이지로 이동</Link></p>
    </div>
  );
};

export default Join;
