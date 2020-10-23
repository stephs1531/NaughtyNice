import React from 'react';
import './App.css';
import Snow from './components/snow';
import MainPage from './components/main';
import Options from './components/options';

function App() {
    return(
        <div className="App">
            <div className="body-container">
                <MainPage />
                {/* <Options /> */}
            </div>

            <Snow />

        </div>
    )
}

export default App;