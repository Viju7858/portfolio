import { Container, Row, Col, Button, Image } from "react-bootstrap";
import VijayMane from "../assets/VijayMane.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="bg-dark text-white d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col lg={6} className="text-center text-lg-start">
            <h4 className="text-info mb-3">Hello, I'm</h4>

            <h1 className="display-3 fw-bold">Vijay Mane</h1>

            <h3 className="text-secondary mb-4">Full Stack Developer</h3>

            <p className="lead">
              I am an MCA student passionate about building modern web
              applications using React, Bootstrap, Node.js, Express.js and
              MongoDB.
            </p>

            <Button
              href="/Vijay_Mane_Resume.pdf"
              download
              variant="info"
              size="lg"
              className="me-3 mt-3"
            >
              Download Resume
            </Button>

            <Button variant="outline-light" size="lg" className="mt-3"  href="#contact">
              Contact Me
            </Button>
          </Col>

          {/* Right Side */}
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <Image
              src={VijayMane}
              roundedCircle
              fluid
              className="shadow-lg border border-5 border-info"
              style={{
                width: "320px",
                height: "320px",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
