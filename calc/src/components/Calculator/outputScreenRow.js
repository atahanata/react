import React from 'react';
import classes from './Calculator.css';

const OutputScreenRow = (props) => {
    return(
        <div className={classes.screenRow}>
            <input type ="text" readOnly value={props.value}/>
        </div>
    )
}

export default OutputScreenRow;