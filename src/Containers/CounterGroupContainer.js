import {connect} from 'react-redux';
import CounterGroup from '../Components/CounterGroup';

const mapStateToProps = (state) =>({
    size: state.size
})

const CounterGroupContainer = connect(mapStateToProps)(CounterGroup);

export default CounterGroupContainer;