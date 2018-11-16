import React, { Component } from 'react';
import './../App.css';

class Mesure extends Component {
    render() {
        const x1 = this.props.x1;
        const y1 = this.props.y1;
        const x2 = this.props.x2;
        const y2 = this.props.y2;
        const courbe = this.props.courbe;

        const distance = Math.sqrt(Math.pow((parseInt(y1) - parseInt(y2)), 2) + Math.pow((parseInt(x1) - parseInt(x2)), 2));
        const between = parseInt(y1) + (distance / 2);

        console.log("btween" + between);
        console.log("d :" + distance);

        const path_d = `M${y1} ${x1} Q ${between} ${courbe} ${y2} ${x2}`

        return (
            <svg width="100%" version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" id='toRotate'  >
                <defs>
                    <linearGradient id="grad1">
                        <stop offset="0%" stop-color="#40b2d3" stop-opacity="0">
                        </stop>
                        <stop offset="100%" stop-color="#40b2d3" stop-opacity="100" >
                            <animate attributeName="offset" values="0;1" dur="2s" />
                        </stop>
                        <stop offset="0%" stop-color="#40b2d3" stop-opacity="0">
                        </stop>
                    </linearGradient>
                </defs>
                <path d={path_d} stroke="url(#grad1)" stroke-width="20" fill="transparent" />
            </svg>
        );
    }
}

export default Mesure;
