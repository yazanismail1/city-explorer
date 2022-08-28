import React from 'react';
import "../styles/Body.css";
import Output from './Output';
import SearchForm from './SearchForm';


class Main extends React.Component {

    render() {
        return (
            <div className='body'>
                <SearchForm />
                <Output />
            </div>
        )
    } 
}

export default Main;
