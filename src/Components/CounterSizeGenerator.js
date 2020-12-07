import React, { Component } from 'react';

export default class CounterSizeGenerator extends Component {
    render() {
        const { size, onChange } = this.props;
        return (
            <div>
                Size: <input type="number" value={size} onChange={onChange} />
            </div>
        )
    }
}