import React from 'react';
import './Info.css';

const Info = () => {
  return (
    <div className="footer-container">
      {/* 첫번째: 프로젝트 소개 */}
      <div className="footer-section1">
        <h2>프로젝트 소개</h2>
        <p>프로젝트에 대한 간단한 소개 내용을 입력하세요.</p>
      </div>

      {/* 두번째: 프로젝트 세부 정보 */}
      <div className="footer-section2">
        <h2>프로젝트 세부 정보</h2>
        <p>프로젝트에 관한 더 자세한 정보를 입력하세요.</p>
      </div>

      {/* 세번째: 팀 정보 */}
      <div className="footer-section3">
        <h2>팀 정보</h2>
        <p>프로젝트를 진행하는 팀에 대한 정보를 입력하세요.</p>
      </div>
    </div>
  );
};

export default Info;
