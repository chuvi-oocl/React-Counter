import React, { Component } from 'react';
import CounterGroup from './CounterGroup'

export default class MultiCounterCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size : 0,
            sum : 0
        };
    }

    resetCounter = () =>{
        this.setState(() => ({
            size: 0,
            sum: 0
        }));
    }


    onChange = (event) => {
        //this.resetCounter();
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
        const {size, sum} = this.state;
        return (
            <div>
                <input type="number" value={size} onChange={this.onChange} />
                <div>
                    Sum: {this.state.sum}
                </div>
                <CounterGroup size={size} sum={sum} onIncrease={this.onIncrease} onDecrease={this.onDecrease}/>
            </div>
        )
    }
}