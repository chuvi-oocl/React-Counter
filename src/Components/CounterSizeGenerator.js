import React, { Component } from 'react';


export default class CounterSizeGenerator extends Component {
    changeCounterSize = (event) =>{
        this.props.updateCounterSize(event.target.value);
        this.props.resetCounter();
    }
    render() {
        const { size } = this.props;
        return (
            <div>
                Size: <input type="number" value={size} onChange={this.changeCounterSize} />
            </div>
        )
    }
}