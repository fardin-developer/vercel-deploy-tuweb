"use client"

import './navbar.css'
import { cursorTo } from 'readline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(0)
    const handleMenu = () => {
        if (menu === 0) {
            setMenu(1)
        } else {
            setMenu(0)
        }
    }
    return (
        <>
            <div className='nav'>
                <div className="left">
                    {/* <img src="/assests/navbar/logo.png"  alt="" /> */}
                    <div className="logo">
                        <img src="/assests/navbar/singleLogo.png" alt="" />
                    </div>
                    <div className="logoText">
                        <div className="heading">
                            <p>Google Developer Student Club</p>
                        </div>

                        <div className="subHeading">
                            <p>Tezpur University</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Explore Us</a></li>
                    <li><a href="/">Videos</a></li>
                    <li><a href="/">Core</a></li>



                </div>
                <div className="menu" onClick={handleMenu}>
                    {menu === 0 ? (
                        <MenuIcon style={{ fontSize: "40" }} />
                    ) : (
                        <CloseIcon style={{ fontSize: "40" }} />
                    )}

                    
                </div>
                <div className='menuList' style={{display:menu===0?'none':"block"}}>
                <li><a href="/">Home</a></li>
                    <li><a href="/">Team</a></li>
                    <li><a href="/">Explore Us</a></li>
                    <li><a href="/">Videos</a></li>
                    <li><a href="/">Core</a></li>

                    </div>

            </div>
        </>

    )
}

export default Navbar
