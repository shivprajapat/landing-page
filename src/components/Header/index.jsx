import React, { useState } from 'react'
import { Logo } from "../../Assets";
import { Navbar, Container, Nav } from "react-bootstrap";
import { routesData } from './routerData'
const Header = () => {
    const [data] = useState(routesData);
    console.log(routesData)
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="logo" className="img-fluid" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            data.map((item, index) => {
                                const { name, link } = item;
                                return (<Nav.Link key={index} href={link}>{name}</Nav.Link>)
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;