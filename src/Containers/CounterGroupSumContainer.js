import {connect} from 'react-redux';

import CounterGroupSum from '../Components/CounterGroupSum';

const mapStateToProps = state => ({
    sum: state.sum
})

const CounterGroupSumContainer = connect(mapStateToProps)(CounterGroupSum);

export default CounterGroupSumContainer;