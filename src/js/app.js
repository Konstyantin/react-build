import React, { Component } from 'react';
import { render } from 'react-dom';

import reactLogo from '../assets/react.svg';

import '../css/style.css'; // Import CSS -> ADDED IN THIS STEP

export default class App extends Component {
    render() {
        return (
            <div>
                <img src={ reactLogo } alt='Commander Keen' />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));