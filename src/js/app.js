import React, { Component } from 'react';
import { render } from 'react-dom';

import reactLogo from '../assets/react.svg';

import '../css/style.css'; // Import CSS -> ADDED IN THIS STEP

export default class Hello extends Component {
    render() {
        return (
            <div>
                {/* ADDED IN THIS STEP */}
                <img src={ reactLogo } alt='Commander Keen' />
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));