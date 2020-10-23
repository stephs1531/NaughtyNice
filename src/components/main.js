import React from 'react';
import Image from '../images/naughtynice.svg';

class MainPage extends React.Component {
    render() {
        return (
           <div className="logo-container">
                <div className="logo-image">
                    <img src={Image}/>
                </div>
                <svg className="svg-button" viewBox="0 0 63.76 19.16"> 
                    <a href="#">
                        <path class="cls-1" d="M58.77,18.72c-26.44,0-26.44.44-52.88.44-3,0-5.89-2.34-5.89-4.27C0,9.24,1.88,9.24,1.88,3.59c0-1.93,1-2.53,4-2.53C32.33,1.06,32.33,0,58.77,0c3,0,5,1.66,5,3.59,0,5.65-.74,5.65-.74,11.3C63,16.82,61.76,18.72,58.77,18.72Z" fill="#ed2224" stroke="#ffffff" stroke-width="2px" stroke-linejoin="round"/>
                        <text x="50%" y="50%" font-size = "7px" text-align="center" fill="#FFFFFF" text-anchor="middle" alignment-baseline="middle">
                                Check List  
                        </text> 
                    </a>
                </svg>
           </div>
        )
    }
}

export default MainPage
