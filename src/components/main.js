import React from 'react';
import Image from '../images/naughtynice.svg';
import Options from './options'

class MainPage extends React.Component {
    render() {
        return (
           <div className="main-container">
               <div className="logo-container">
                    <div className="logo-image">
                        <img src={Image}/>
                    </div>
               </div>
               <div className="game-container">
                <Options />
                
               </div>
           </div>
        )
    }
}

export default MainPage
