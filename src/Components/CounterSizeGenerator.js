import React, { Component } from 'react';

export default class CounterSizeGenerator extends Component {
    render() {
        const { size, onSizeChange } = this.props;
        return (
            <div>
                Size: <input type="number" value={size} onChange={onSizeChange} />
            </div>
        )
    }
}