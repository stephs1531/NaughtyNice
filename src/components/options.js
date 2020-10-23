import React from 'react';
import ReactDOM from "react-dom";

var box1 = <svg className="options-box" viewBox="0 0 63.76 29.67"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M58.77,29c-26.44,0-26.44.68-52.88.68-3,0-5.89-3.62-5.89-6.62,0-8.74,1.88-8.74,1.88-17.49,0-3,1-3.92,4-3.92C32.33,1.64,32.33,0,58.77,0c3,0,5,2.57,5,5.56,0,8.75-.74,8.75-.74,17.49C63,26.05,61.76,29,58.77,29Z" fill="#ed2224" width="200px" /></g></g><text x="50%" y="50%" font-size = "10px" text-align="center" fill="#FFFFFF" text-anchor="middle" alignment-baseline="middle">Naughty</text></svg>
var box2 = <svg className="options-box" viewBox="0 0 63.76 29.67"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M58.77,29c-26.44,0-26.44.68-52.88.68-3,0-5.89-3.62-5.89-6.62,0-8.74,1.88-8.74,1.88-17.49,0-3,1-3.92,4-3.92C32.33,1.64,32.33,0,58.77,0c3,0,5,2.57,5,5.56,0,8.75-.74,8.75-.74,17.49C63,26.05,61.76,29,58.77,29Z" fill="#ed2224" width="200px" /></g></g><text x="50%" y="50%" font-size = "10px" text-align="center" fill="#FFFFFF" text-anchor="middle" alignment-baseline="middle">Nice</text></svg>
var box3 = <svg className="options-box" viewBox="0 0 63.76 29.67"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M58.77,29c-26.44,0-26.44.68-52.88.68-3,0-5.89-3.62-5.89-6.62,0-8.74,1.88-8.74,1.88-17.49,0-3,1-3.92,4-3.92C32.33,1.64,32.33,0,58.77,0c3,0,5,2.57,5,5.56,0,8.75-.74,8.75-.74,17.49C63,26.05,61.76,29,58.77,29Z" fill="#ed2224" width="200px" /></g></g><text x="50%" y="50%" font-size = "10px" text-align="center" fill="#FFFFFF" text-anchor="middle" alignment-baseline="middle">Not Sure</text></svg>

// const optionArray = [box1, box2, box3].map(option => <span>{option}</span>);

// const rootElement = document.getElementById("root");
// ReactDOM.render(optionArray, rootElement);

class Options extends React.Component {
    render() {
        const optionArray = [box1, box2, box3].map(option => <span>{option}</span>);
        return <div className="options-container">{optionArray}</div>
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Options />, rootElement);

export default Options



