import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold text-primary mb-5">Contact Me</h2>

        <Row className="g-4">
          {/* Contact Form */}
          <Col lg={7}>
            <Card className="shadow border-0 rounded-4">
              <Card.Body className="p-4">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Write your Message..."
                    />
                  </Form.Group>

                  <Button variant="primary" size="lg">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col lg={5}>
            <Card className="shadow border-0 rounded-4 h-100">
              <Card.Body className="p-4">
                <h3 className="fw-bold mb-4">Contact Information</h3>

                <p>
                  <FaPhoneAlt className="text-primary me-2" />
                  +91 9322569846
                </p>

                <p>
                  <FaEnvelope className="text-danger me-2" />
                  VM72474@gmail.com
                </p>

                <p>
                  <FaMapMarkerAlt className="text-success me-2" />
                  Sangli, Maharashtra
                </p>

                <p>
                  <FaInstagram className="text-danger me-2" />
                  @Viju_Mane_7
                </p>

                <hr />

                <h5 className="fw-bold mb-3">Follow Me</h5>

                <div className="d-flex gap-3">
                  <Button
                    variant="dark"
                    href="https://github.com/"
                    target="_blank"
                  >
                    <FaGithub size={20} />
                  </Button>

                  <Button
                    variant="primary"
                    href="https://linkedin.com/"
                    target="_blank"
                  >
                    <FaLinkedin size={20} />
                  </Button>

                  <Button
                    variant="danger"
                    href="https://instagram.com/Viju_Mane_7"
                    target="_blank"
                  >
                    <FaInstagram size={20} />
                  </Button>
                  <Button
                    variant="success"
                    href="https://wa.me/919322569846"
                    target="_blank"
                  >
                    <FaWhatsapp size={20} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
