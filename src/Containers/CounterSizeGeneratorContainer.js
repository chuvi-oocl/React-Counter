import {connect} from 'react-redux';
import { updateCounterSize, resetCounter } from '../action';

import CounterSizeGenerator from '../Components/CounterSizeGenerator'

const mapDispatchToProps = dispatch => {
    return{
        updateCounterSize: (size) => {
            dispatch(updateCounterSize(size));
        },
        resetCounter: () =>{
            dispatch(resetCounter());
        }
    };
};

const CounterSizeGeneratorContainer = connect(null, mapDispatchToProps)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;