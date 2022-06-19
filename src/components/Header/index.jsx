import React,{useState} from 'react'
import { Logo } from "../../Assets";
import { Navbar, Container, Nav } from "react-bootstrap";
import { routesData }  from './routerData'
export const Header = () => {
    const [data, setData] = useState(routesData);
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
                                const { name } = item;
                                return (<Nav.Link href="#home">{name}</Nav.Link>)
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
