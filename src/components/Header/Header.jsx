import React from 'react'
import Styles from "./Header.module.css"
import NailJail from "../../assets/images/NailJailLogo1.png"


const Header = (props) => {
    return (
        <header className={Styles.header}>
        <img src={NailJail}></img>
        </header>
    )
}

export default Header;