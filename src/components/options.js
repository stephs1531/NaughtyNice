import React from 'react';
import ReactDOM from "react-dom";

var box1 = <svg className="1-box, options-box" viewBox="0 0 63.76 29.67"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id ="svgInternalId1" class="cls-1" d="M58.77,29c-26.44,0-26.44.68-52.88.68-3,0-5.89-3.62-5.89-6.62,0-8.74,1.88-8.74,1.88-17.49,0-3,1-3.92,4-3.92C32.33,1.64,32.33,0,58.77,0c3,0,5,2.57,5,5.56,0,8.75-.74,8.75-.74,17.49C63,26.05,61.76,29,58.77,29Z" fill="#ed2224" width="200px" /></g></g><text x="50%" y="50%" font-size = "10px" text-align="center" fill="#FFFFFF" text-anchor="middle" alignment-baseline="middle">Naughty</text></svg>
var box2 = <svg className="2-box, options-box" viewBox="0 0 63.76 29.67"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id ="svgInternalId2" class="cls-1" d="M58.77,29c-26.44,0-26.44.68-52.88.68-3,0-5.89-3.62-5.89-6.62,0-8.74,1.88-8.74,1.88-17.49,0-3,1-3.92,4-3.92C32.33,1.64,32.33,0,58.77,0c3,0,5,2.57,5,5.56,0,8.75-.74,8.75-.74,17.49C63,26.05,61.76,29,58.77,29Z" fill="#ed2224" width="200px" /></g></g><text x="50%" y="50%" font-size = "10px" text-align="center" fill="#FFFFFF" text-anchor="middle" alignment-baseline="middle">Nice</text></svg>
var box3 = <svg className="3-box, options-box" viewBox="0 0 63.76 29.67"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id ="svgInternalId3" class="cls-1" d="M58.77,29c-26.44,0-26.44.68-52.88.68-3,0-5.89-3.62-5.89-6.62,0-8.74,1.88-8.74,1.88-17.49,0-3,1-3.92,4-3.92C32.33,1.64,32.33,0,58.77,0c3,0,5,2.57,5,5.56,0,8.75-.74,8.75-.74,17.49C63,26.05,61.76,29,58.77,29Z" fill="#ed2224" width="200px" /></g></g><text x="50%" y="50%" font-size = "10px" text-align="center" fill="#FFFFFF" text-anchor="middle" alignment-baseline="middle">Not Sure</text></svg>



class Options extends React.Component {
    render() {
        const optionArray = [box1, box2, box3].map(option => <span>{option}</span>);

        // function random_items(optionArray) {
        //     return optionArray[Math.floor(Math.random()*optionArray.length)];
        //     console.log (random_items(optionArray));
        // }
        
            function handleClick(e) {
              e.preventDefault();
              console.log('The link was clicked.');

              var randomItem = optionArray[Math.floor(Math.random()*optionArray.length)];
              console.log(randomItem);

              console.log(randomItem.props.children.props.className);

              if (randomItem.props.children.props.className = "1-box, options-box") {
                console.log("you're naughty!");
              } else if (randomItem.props.children.props.className = "2-box, options-box") {
                console.log("You're nice!");
              } else {
                console.log("I'm not sure...");
              }

            }
        
        return (
        <div>
        <div className="options-container">{optionArray}</div>
        <svg className="svg-button" viewBox="0 0 63.76 19.16"> 
            <a href="#" onClick={handleClick}>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<Options />, rootElement);

export default Options



