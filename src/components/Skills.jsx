import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

function Skills() {
  const skills = [
    { name: "HTML", value: 95 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 88 },
    { name: "React.js", value: 90 },
    { name: "Bootstrap", value: 92 },
    { name: "Node.js", value: 60 },
    { name: "Express.js", value: 78 },
    { name: "MongoDB", value: 65 },
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center fw-bold text-info mb-5">
          My Skills
        </h2>

        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={6} key={index}>
              <Card className="shadow border-0">
                <Card.Body>
                  <div className="d-flex justify-content-between mb-2">
                    <strong>{skill.name}</strong>
                    <span>{skill.value}%</span>
                  </div>

                  <ProgressBar
                    now={skill.value}
                    variant="info"
                    animated
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;