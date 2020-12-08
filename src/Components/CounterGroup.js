import React, { Component } from 'react';
import CounterContainer from '../Containers/CounterContainer';
export default class CounterGroup extends Component {
    constructor(props) {
        super(props);
    }

    initArraySize = (size) => {
        return Array.from(Array(size).keys());
    }

    generateCounters = () =>{
        const size = this.props.size ? parseInt(this.props.size) : 0;
        const initArraySize = this.initArraySize(size);
        return initArraySize.map((value) =>
            <CounterContainer key={value} size={size}/>
        )
    }

    render() {
        return (
            <div>
                {this.generateCounters()}
            </div>
        )
    }
}