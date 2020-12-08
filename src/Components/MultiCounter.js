import React, { Component } from 'react';
import CounterGroupSumContainer from '../Containers/CounterGroupSumContainer';
import CounterSizeGeneratorContainer from '../Containers/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../Containers/CounterGroupContainer';

export default class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            sum: 0
        };
    }

    render() {
        return (
            <div>
                <CounterSizeGeneratorContainer/>
                <CounterGroupSumContainer />
                <CounterGroupContainer/>
            </div>
        )
    }
}