import React, { Component } from 'react';
export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state={
          number: 0
        }
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
    }

    minusOne(){
        this.setState(state => ({count : state.count-1}));
    }
    plusOne(){
        this.setState(state => ({count : state.count+1}));
    }

    render(){
        return(
            <section>
                <input type="button" value="+" />

                <span >{this.state.number}</span>
                
                <input type="button" value="-"/>
            </section>
        )
    }
}