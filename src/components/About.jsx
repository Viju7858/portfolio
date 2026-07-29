import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserGraduate, FaLaptopCode, FaCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-light py-5">
      <Container>

        <h2 className="text-center fw-bold text-primary mb-5">
          About Me
        </h2>

        <Row className="justify-content-center">

          <Col lg={8}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Body className="p-5">

                <h3 className="fw-bold mb-3">
                  Hi, I'm Vijay Mane 👋
                </h3>

                <p className="text-muted fs-5">
                  I am currently pursuing MCA and I enjoy building modern,
                  responsive web applications using the MERN Stack. I am
                  passionate about learning new technologies and solving
                  real-world problems through coding.
                </p>

                <Row className="mt-4">

                  <Col md={4} className="text-center mb-4">
                    <FaLaptopCode size={45} className="text-primary mb-3" />
                    <h5>Frontend</h5>
                    <p className="text-muted">
                      React, Bootstrap, HTML, CSS, JavaScript
                    </p>
                  </Col>

                  <Col md={4} className="text-center mb-4">
                    <FaCode size={45} className="text-success mb-3" />
                    <h5>Backend</h5>
                    <p className="text-muted">
                      Node.js, Express.js, MongoDB
                    </p>
                  </Col>

                  <Col md={4} className="text-center mb-4">
                    <FaUserGraduate size={45} className="text-danger mb-3" />
                    <h5>Education</h5>
                    <p className="text-muted">
                      MCA - Bharati Vidyapeeth University
                    </p>
                  </Col>

                </Row>

              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default About;