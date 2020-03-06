import React from 'react';

import OutputScreenRow from './outputScreenRow';
import classes from './Calculator.css';

const OutputScreen = (props) => {
    return(
        <div className={classes.screen}>
            <OutputScreenRow value={props.question}/>
            <OutputScreenRow value={props.answer}/>
        </div>
    )
}

export default OutputScreen;