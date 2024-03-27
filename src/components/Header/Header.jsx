import React from 'react'
import Styles from "./Header.module.css"

const Header = (props) => {
    return (
        <header className={Styles.header}>
        <img src="/natalieva.png"/>
        </header>
    )
}

export default Header;