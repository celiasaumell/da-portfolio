import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export default function Navigation(props) {
    return (
    <>
    <Navbar bg="clear" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">Moises Figueroa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="/resume.pdf" target="_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>)
    
}