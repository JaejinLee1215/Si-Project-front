import React from 'react';

function UserList({ users }) {
  // 이름으로 사용자들을 그룹화하는 함수
  const groupUsersByName = (users) => {
    const groupedUsers = {};
    users.forEach((user) => {
      const { name, picture } = user;
      if (!groupedUsers[name]) {
        groupedUsers[name] = [];
      }
      groupedUsers[name].push(picture);
    });
    return groupedUsers;
  };

  // 그룹화된 사용자들을 가로로 표시하는 함수
  const renderGroupedUsers = (groupedUsers) => {
    return Object.entries(groupedUsers).map(([name, pictures]) => (
      <div key={name}>
        <h3>{name}</h3>
        <div style={{ display: 'flex' }}>
          {pictures.map((data, index) => (
            <img
              key={index}
              src={`data:image/jpeg;base64, ${data}`}
              alt={`User ${index}`}
              width="200"
              height="200"
              style={{ marginRight: '10px' }}
            />
          ))}
        </div>
      </div>
    ));
  };

  const groupedUsers = groupUsersByName(users);

  return (
    <div>
      {renderGroupedUsers(groupedUsers)}
    </div>
  );
}

export default UserList;
