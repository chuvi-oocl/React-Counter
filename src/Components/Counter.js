import React, { Component } from 'react';
import testUtils from 'react-dom/test-utils';
export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    shouldComponentUpdate = (newProps) =>{
        if(newProps.size != this.props.size){
            this.setState({number: 0});
        }
        return true;
    }

    onIncrease = () => {
        this.setState((prevState) => ({ number: prevState.number + 1 }));
        this.props.onTotalIncrease();
    };

    onDecrease = () => {
        this.setState((prevState) => ({ number: prevState.number - 1 }));
        this.props.onTotalDecrease();
    };

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.onIncrease} />

                <span >{this.state.number}</span>

                <input type="button" value="-" onClick={this.onDecrease} />
            </section>
        )
    }
}