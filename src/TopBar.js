import React from 'react'
import classes from './TopBar.module.css'

const TopBar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img
                     src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt="logo"
                />
            </nav>
        </header>

    )
}

export default TopBar
