import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers }) => {
  const [name, setName] = useState('');
  const [pictures, setPictures] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePictureChange = (e) => {
    const files = e.target.files;
    const maxFiles = 5; // Maximum number of files allowed
    if (files.length <= maxFiles) {
      setPictures(files);
    } else {
      // Show a warning message when more than 5 files are selected
      window.alert('사진은 5장까지만 업로드할 수 있습니다.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if at least 1 picture is selected
    if (pictures.length === 0) {
      // Show a warning message if no pictures are selected
      window.alert('사진은 1장 이상, 5장 이하로 업로드 가능합니다.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    for (let i = 0; i < pictures.length; i++) {
      formData.append('picture', pictures[i]);
    }

    axios
      .post('http://127.0.0.1:5000/home/data', formData)
      .then((response) => {
        console.log(response.data.message);
        fetchUsers();
        setName('');
        setPictures([]);
      })
      .catch((error) => {
        console.error('데이터 업로드 중 에러 발생:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>데이터 업로드</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="picture">Picture:</label>
        <input type="file" id="picture" name="picture" onChange={handlePictureChange} multiple />
      </div>
      <button type="submit">업로드</button>
    </form>
  );
};

export default UserForm;
