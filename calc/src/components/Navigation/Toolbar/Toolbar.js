import React from 'react';
import classes from '../Toolbar/Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import RightSideItems from './RightSideItems/RightSideItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav>
            <NavigationItems />
        </nav>
        <Logo />
        <nav>
            <RightSideItems />
        </nav>


    </header>
);

export default toolbar;