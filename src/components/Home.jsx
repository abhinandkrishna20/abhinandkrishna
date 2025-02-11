// src/components/Home.js
import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <div className="text-center p-5 bg-light rounded">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a software developer with 3+ years of experience in building professional and responsive websites.
        </p>
        <Button variant="primary" href="/projects">View My Projects</Button>
      </div>

      {/* Skills Section */}
      <section className="mt-5">
        <h2 className="text-center">My Skills</h2>
        <Row className="text-center mt-3">
          {["React.js", "Spring Boot", "Java", "Python", "UI Automation", "Bootstrap", "MySQL"].map(skill => (
            <Col key={skill} md={4} className="p-2">
              <Card className="shadow-sm">
                <Card.Body>
                  <h5>{skill}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Featured Projects Section */}
      <section className="mt-5">
        <h2 className="text-center">Featured Projects</h2>
        <Row className="mt-3">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Company Website</Card.Title>
                <Card.Text>Developed a fully responsive company website using React and Bootstrap.</Card.Text>
                <Button variant="outline-primary" href="/projects">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Automation Tool</Card.Title>
                <Card.Text>Built an RPA tool to automate repetitive UI tasks using UIPath.</Card.Text>
                <Button variant="outline-primary" href="/projects">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Testimonials Section */}
      <section className="mt-5">
        <h2 className="text-center">What People Say</h2>
        <Row className="mt-3">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Text>"Very professional and delivers great results!"</Card.Text>
                <footer className="blockquote-footer">Client A</footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Text>"An excellent developer with great problem-solving skills!"</Card.Text>
                <footer className="blockquote-footer">Client B</footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Home;
