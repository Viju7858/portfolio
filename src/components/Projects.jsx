import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Dairy from "../assets/Dairy Management.png";
import VotingApp from "../assets/Voting App.png";
import YouTubeClone from "../assets/YouTube.png";

function Projects() {
  const projects = [
    {
      title: "Voting App",
      description:
        "A secure online voting system built using React, Node.js, Express.js and MongoDB.",
      tech: ["React", "Node.js", "MongoDB"],
      image: VotingApp,
    },
    {
      title: "Dairy Management System",
      description:
        "A milk collection and dairy management application with farmer and buffalo records.",
      tech: ["React", "Bootstrap", "MongoDB"],
      image: Dairy,
    },
    {
      title: "YouTube Clone",
      description:
        "A responsive YouTube UI clone developed using React and Bootstrap.",
      tech: ["React", "Bootstrap", "API"],
      image: YouTubeClone,
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold text-primary mb-5">
          My Projects
        </h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="h-100 shadow-lg border-0">

                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column">

                  <Card.Title className="fw-bold">
                    {project.title}
                  </Card.Title>

                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>

                  <div className="mb-3">
                    {project.tech.map((item, i) => (
                      <Badge
                        bg="info"
                        text="dark"
                        className="me-2"
                        key={i}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto">

                    <Button
                      variant="dark"
                      className="me-2"
                    >
                      GitHub
                    </Button>

                    <Button variant="primary">
                      Live Demo
                    </Button>

                  </div>

                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;