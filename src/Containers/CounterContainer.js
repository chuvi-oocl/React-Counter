import {connect} from "react-redux";
import { increaseSum, decreaseSum } from "../action";

import Counter from "../Components/Counter";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    increase : () => {dispatch(increaseSum())},
    decrease : () => {dispatch(decreaseSum())}
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;