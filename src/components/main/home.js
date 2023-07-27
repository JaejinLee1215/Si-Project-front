import React from 'react';
import './home.css';
import NavBar from '../navigation/NavBar';
import Search from '../search/Search';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Search />
        </div>
    )
}

export default Home;