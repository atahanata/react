import React from 'react';
import classes from './RightSideItems.css';
import RightSide from '../RightSide/RightSide';

const rightSideItems = () => (
    <ul className={classes.RightSideItems}>
       <RightSide link="/">About</RightSide>
       <RightSide link="/">Contact</RightSide>
    </ul>
);

export default rightSideItems;