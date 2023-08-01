import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import SearchForm from './components/SearchForm';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    fetch('http://127.0.0.1:5000/home/data') // Flask 서버의 데이터 엔드포인트에 GET 요청
      .then((response) => response.json())
      .then((data) => {
        // 이미지 데이터를 배열로 변환
        const modifiedData = data.map((item) => ({
          name: item.name,
          picture: Array.isArray(item.picture) ? item.picture : [item.picture],
        }));
        setUsers(modifiedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSearch = (searchValue) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  return (
    <div>
      <h1>사용자와 사진</h1>
      <UserForm fetchUsers={loadUsers} />
      <h2>데이터 표시</h2>
      <SearchForm handleSearch={handleSearch} />
      <div>
        <UserList users={filteredUsers.length > 0 ? filteredUsers : users} />
      </div>
    </div>
  );
}

export default App;
