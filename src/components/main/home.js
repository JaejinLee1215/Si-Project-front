import React from 'react';
import './home.css';
import NavBar from '../navigation/NavBar';
import Search from '../search/Search';
import Category from '../category/Category';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Search />
            <Category />
        </div>
    )
}

export default Home;