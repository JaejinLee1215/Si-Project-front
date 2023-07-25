import React, { useState } from 'react';
import './InputBox.css';
import { Link } from 'react-router-dom';


const InputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConfirm = () => {
    setOutputValue(inputValue);
  };

  return (
    <div>
      <h2>어떤 사건이 궁금하신가요</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="입력창"
      />
      <button onClick={handleConfirm}>확인</button>
      <div>
        <p>입력한 값: {outputValue}</p>
        <Link to="/login">로그인 페이지로 이동</Link>
      </div>
    </div>
  );
};

export default InputBox;
