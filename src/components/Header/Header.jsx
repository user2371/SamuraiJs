import React from 'react'
import styles from "./Header.module.css"
import Logo from "../../assets/images/Logo.svg"
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={Logo}></img>
            <div className={styles.loginBlock}>
                {(props.isAuth)
                    ? <div>{props.login}
                        <div onClick={props.logout} ><button className={`${styles.logoutBtn} btn`}>Logout</button></div>
                      </div>
                    :
                    <NavLink to="/login" className={styles.loginLink}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;

