import React from 'react';
import './home.css';
import Search from '../search/Search';
import Category from '../category/Category';
import Info from '../footer/Info';

const Home = () => {
    return (
        <div>
            <Search />
            <Category />
            <Info />
        </div>
    )
}

export default Home;