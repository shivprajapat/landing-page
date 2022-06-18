import { Logo } from "../Assets";
import { Navbar, Container, Nav } from "react-bootstrap";
export const Header = () => {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="logo" className="img-fluid" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Class</Nav.Link>
                        <Nav.Link href="#link">Promo</Nav.Link>
                        <Nav.Link href="#link">Online Class</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
