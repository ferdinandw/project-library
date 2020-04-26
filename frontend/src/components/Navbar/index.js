import React from 'react'
import { Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navbar1 = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Link to="">Home</Link>
            </Navbar.Brand>
            <Navbar.Brand href="#home">
                <Link to="/form">Form</Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Navbar1