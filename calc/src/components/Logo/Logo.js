import React from 'react';
import gsLogo from '../../assets/images/gs.png';
import classes from './Logo.css';


const logo = (props) => (
    <div className= {classes.Logo}>
        <img src={gsLogo} alt="gs" />
    </div>
);

export default logo;