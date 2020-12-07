import React, { Component } from 'react';
import CounterGroup from './CounterGroup'
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';

export default class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            sum: 0,
            randomKey: Math.random()
        };
    }

    resetCounter = () => {
        this.setState(() => ({
            size: 0,
            sum: 0,
            randomKey: Math.random()
        }));
    }

    onChange = (event) => {
        this.resetCounter();
        this.setState(() => ({
            size: event.target.value
        }));
    };


    onIncrease = () => {
        this.setState((prevState) => ({ sum: prevState.sum + 1 }));
    };

    onDecrease = () => {
        this.setState((prevState) => ({ sum: prevState.sum - 1 }));
    };

    render() {
        const { size, sum, randomKey } = this.state;

        return (
            <div>
                <CounterSizeGenerator size={size} onChange={this.onChange} />
                <CounterGroupSum sum={sum} />
                <CounterGroup key={randomKey} size={size} onIncrease={this.onIncrease} onDecrease={this.onDecrease} />
            </div>
        )
    }
}