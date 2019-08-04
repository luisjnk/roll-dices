import React, { Component } from 'react';
import './Die.css';
export default class Die extends Component {

    render() {
        let cls = `Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`
        return <i className={cls}></i>
    }
}
