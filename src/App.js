import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { acronyms } from './acronyms.json';

class App extends Component {
    getRandomAcronym() {
        return acronyms[Math.floor(acronyms.length * Math.random())];
    }
    render() {
        const { acronym, meaning } = this.getRandomAcronym();
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        {acronym} = {meaning}
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
