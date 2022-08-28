import React from 'react';
import "../styles/Body.css";
import SearchForm from './SearchForm';


class Main extends React.Component {

    render() {
        return (
            <div className='body'>
                <SearchForm />
            </div>
        )
    } 
}

export default Main;
