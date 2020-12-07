import React, { Component } from 'react';

export default class CounterGroupSum extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Sum: {this.props.sum}
            </div>
        )
    }
}