import {Nav, Navbar} from "react-bootstrap"

export default function Navigation() {
    return (
    <>
    <Navbar bg="clear" variant="dark" expand="lg" fixed="top" >
        <Navbar.Brand href="/">Moises Figueroa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="/resume.pdf">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>)
    
}