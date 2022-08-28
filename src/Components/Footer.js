import React from 'react';
import "../styles/Footer.css";

class Footer extends React.Component {

    getCurrentYear = () => {
        const currentYear = new Date().getFullYear()
        return currentYear;
    }

    render() {
        return (
            <div className='footer'>
                <div className='background-footer'></div>
                <p>&copy; All right reserved | Yazan Alfarra | {this.getCurrentYear()}</p>
            </div>
        )
    } 
}

export default Footer;
