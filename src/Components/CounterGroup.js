import React, { Component } from 'react';
import Counter from './Counter'
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
            <Counter key={value} onTotalIncrease={this.props.onIncrease} onTotalDecrease={this.props.onDecrease} />
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