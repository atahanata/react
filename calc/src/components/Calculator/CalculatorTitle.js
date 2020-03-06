import React from 'react';
import classes from './Calculator.css';

const CalculatorTitle = (props) => {
    return (
        <div className={classes.calculatorTitle}>
            {props.value}
        </div>
    )
}

export default CalculatorTitle;