import React, { Component } from 'react';
import CounterGroup from './CounterGroup'
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';

export default class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            sum: 0
        };
    }

    resetCounter = () => {
        this.setState(() => ({
            size: 0,
            sum: 0
        }));
    }

    onSizeChange = (event) => {
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
        const { size, sum } = this.state;

        return (
            <div>
                <CounterSizeGenerator size={size} onSizeChange={this.onSizeChange} />
                <CounterGroupSum sum={sum} />
                <CounterGroup size={size} onIncrease={this.onIncrease} onDecrease={this.onDecrease} />
            </div>
        )
    }
}