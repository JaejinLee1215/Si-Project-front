import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('http://127.0.0.1:5000/home/data')
    .then(response => response.data)
    .catch(error => {
      console.error('데이터를 불러오는 중 에러 발생:', error);
      return [];
    });
};
