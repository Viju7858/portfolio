import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 justify-content-center align-items-center">
      <Container>
        <Row>
          {/* Left */}
          <Col md={6} className="mb-4">
            <h3 className="text-info fw-bold">Vijay Mane</h3>

            <p className="text-light">Full Stack Developer | MCA Student</p>

            <p className="text-secondary">
              Passionate about creating modern, responsive and user-friendly web
              applications using React, Bootstrap, Node.js and MongoDB.
            </p>
          </Col>

          {/* Right */}
          <Col md={6} className="text-md-end">
            <h5 className="mb-3">Follow Me</h5>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-3 me-3"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primary fs-3 me-3"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/Viju_Mane_7"
              target="_blank"
              rel="noreferrer"
              className="text-danger fs-3"
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} Vijay Mane | Made with{" "}
          <FaHeart className="text-danger mx-1" />
          using React & Bootstrap
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
