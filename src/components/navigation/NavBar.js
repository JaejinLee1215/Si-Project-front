import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav id="primary_nav_wrap">
        <ul>
          <li className="current-menu-item"><a href="/">Home</a></li>
          <li><a href="/">유사 사례 찾기</a></li>
          <li><a href="/">우리 동네 변호사</a></li>
          <li><a href="/">변호사 상담 신청</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="/login" className="login-btn">로그인</a>
        <a href="/join" className="join-btn">회원가입</a>
      </div>
    </div>
  );
};

export default NavBar;
