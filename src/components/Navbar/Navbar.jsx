import React from 'react'
import styles from "./Navbar.module.css"
import { NavLink } from '../../../node_modules/react-router-dom/dist/index';

const activeLink = ({isActive}) => isActive ? styles.active : undefined;

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
        <div><NavLink to="/profile" className={activeLink}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" className={activeLink}>Messages</NavLink></div>
        <div><NavLink to="/news" className={activeLink}>News</NavLink></div>
        <div><NavLink to ="/music" className={activeLink}>Music</NavLink></div>
        <div><NavLink to ="/settings" className={activeLink}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar;