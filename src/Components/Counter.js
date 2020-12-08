import React, { useState, useEffect } from 'react';
import testUtils from 'react-dom/test-utils';
const Counter = ({ size, onTotalIncrease, onTotalDecrease }) => {
    const [number, setNumber] = useState(0);

    useEffect(() =>{
        setNumber(0);
    }, [size])

    const onIncrease = () => {
        setNumber((prevState) => prevState + 1);
        onTotalIncrease();
    };

    const onDecrease = () => {
        setNumber((prevState) => prevState - 1);
        onTotalDecrease();
    };

    return (
        <section>
            <input type="button" value="+" onClick={onIncrease} />

            <span >{number}</span>

            <input type="button" value="-" onClick={onDecrease} />
        </section>
    )
}

export default Counter;