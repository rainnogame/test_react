import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TriangleChecker from './components/TriangleChecker';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">My hard test</h1>
                </header>
                <TriangleChecker/>
            </div>
        );
    }
}

export default App;
