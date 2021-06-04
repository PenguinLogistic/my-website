import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styles from '../scss/navbar.module.scss'


const TopBar: React.FC = () => {
    return(
        <Navbar fixed='top' expand="lg" variant='dark' className={styles.navbar__wrapper}>
            <Navbar.Brand href="/" className={styles.navBrand}><h2>Ryan</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Nav className={styles.linkContainer}>
                <Nav.Link className={styles.navLink} href="/">Home</Nav.Link>
                <Nav.Link className={styles.navLink} href="/about">About Me</Nav.Link>
                <Nav.Link className={styles.navLink} href="/contactpage">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default TopBar