"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { GrTechnology } from "react-icons/gr";
import styles from './header.module.css';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div>
                <Link className={styles.logo} href='/' >
                    CLOUD
                    <GrTechnology />
                    HOSTING
                </Link>
                <div className={styles.menu}>
                    {toggle ? <IoCloseSharp onClick={() => setToggle(!toggle)} /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} />}
                </div>
            </div>
            <div className={styles.navLinksWrapper} style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" || "" }}>
                <ul className={styles.navLinks}>
                    <Link onClick={() => setToggle(!toggle)} className={styles.navLink} href='/'>Home</Link>
                    <Link onClick={() => setToggle(!toggle)} className={styles.navLink} href='/articles'>Articles</Link>
                    <Link onClick={() => setToggle(!toggle)} className={styles.navLink} href='/about'>About</Link>
                    <Link onClick={() => setToggle(!toggle)} className={styles.navLink} href='/admin'>Admin Dashboard</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar