import { INCREASE, DECREASE, UPDATE_COUNTER_SIZE, RESET_COUNTER} from "./actionTypes"

export const increaseSum =  () => {
    return {type: INCREASE};
}

export const decreaseSum = () => {
    return {type: DECREASE};
}

export const updateCounterSize = (size) => {
    return{
        type: UPDATE_COUNTER_SIZE,
        payload: size
    }
}

export const resetCounter = () => {
    return{
        type: RESET_COUNTER
    }
}