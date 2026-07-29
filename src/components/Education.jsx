import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Bharati Vidyapeeth (Deemed to be University), Sangli",
      duration: "2026 - Present",
      status: "Pursuing",
      description:
        "Currently learning React.js, Bootstrap, Node.js, Express.js, MongoDB and Full Stack Development.",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      college: "Yashwantrao Chavan Maharashtra Open University (YCMOU)",
      duration: "2022 - 2025",
      status: "Completed",
      description:
        "Completed Bachelor's degree with focus on Commerce, Business Management and Computer Applications.",
    },
  ];

  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold text-primary mb-5">Education</h2>

        <Row className="justify-content-center">
          {education.map((item, index) => (
            <Col lg={10} key={index} className="mb-4">
              <Card className="shadow border-0 rounded-4">
                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col md={2} className="text-center mb-3 mb-md-0">
                      <FaGraduationCap size={60} className="text-primary" />
                    </Col>

                    <Col md={8}>
                      <h4 className="fw-bold">{item.degree}</h4>

                      <h6 className="text-muted">{item.college}</h6>

                      <p className="mb-2">
                        <strong>Duration:</strong> {item.duration}
                      </p>

                      <p className="text-secondary">{item.description}</p>
                    </Col>

                    <Col md={2} className="text-center">
                      <Badge
                        bg={item.status === "Completed" ? "success" : "warning"}
                        text={item.status === "Completed" ? "light" : "dark"}
                        className="fs-6 px-3 py-2"
                      >
                        {item.status}
                      </Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;
