import React from 'react';
import './home.css';
import Search from '../search/Search';
import Category from '../category/Category';
import Info from '../footer/Info';
import SpeedDialTooltipOpen from '../menu/Menu';

const Home = () => {
    return (
        <div>
            <Search />
            <Category />
            <SpeedDialTooltipOpen />
            <Info />
        </div>
    )
}

export default Home;