import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function NavbarSection() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="dark"
      variant="dark"
      className="shadow-lg py-3"
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand
          href="#home"
          className="fw-bold fs-3 text-info"
        >
          Vijay <span className="text-white">Mane</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#about">About</Nav.Link>

            <Nav.Link href="#skills">Skills</Nav.Link>

            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#education">Education</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-light ms-lg-4 me-3 fs-4"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-info me-3 fs-4"
            >
              <FaLinkedin />
            </a>

            <Button
              variant="info"
              className="fw-bold rounded-pill px-4"
            >
              Resume
            </Button>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavbarSection;