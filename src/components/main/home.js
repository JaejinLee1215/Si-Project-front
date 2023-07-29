import React from 'react';
import './home.css';
import NavBar from '../navigation/NavBar';
import Search from '../search/Search';
import Category from '../category/Category';
import Info from '../footer/Info';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Search />
            <Category />
            <Info />
        </div>
    )
}

export default Home;