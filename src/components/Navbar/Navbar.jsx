import React from 'react'
import styles from "./Navbar.module.css"
import { NavLink } from '../../../node_modules/react-router-dom/dist/index';

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
        <div><NavLink to="/profile" className={({isActive}) => isActive ? styles.active : undefined}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" className={({isActive}) => isActive ? styles.active : undefined}>Messages</NavLink></div>
        <div><a href="#">News</a></div>
        <div><a href="#">Music</a></div>
        <div><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar;