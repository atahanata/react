import React from 'react';
import classes from './RightSide.css';


const rightSide = (props) => (
    <li className={classes.RightSide}>
        <a
            href={props.link}> {props.children}
        </a>
    </li>
);

export default rightSide;