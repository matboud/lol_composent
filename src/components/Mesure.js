import React, { Component } from 'react';
import SvgLine from './SvgLine'
import './../App.css';

class Mesure extends Component {
    render() {
        return (
            <SvgLine x1="80" x2="80" y1="40" y2="400" courbe="10" />
        );
    }
}

export default Mesure;
