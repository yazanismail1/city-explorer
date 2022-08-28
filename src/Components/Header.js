import React from 'react';
import "../styles/Header.css";


class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <div className='background-header'></div>
                <h1>City Explorer</h1>
            </div>
        )
    } 
}

export default Header;
