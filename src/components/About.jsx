// src/components/About.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import abhi from "../images/abhinand.jpg";

function About() {
  return (
    <Container className="mt-5">
      <h2 className="text-center">About Me</h2>
      <Row className="align-items-center mt-4">
        <Col md={4} className="text-center">
          <Image src={abhi} roundedCircle fluid />
        </Col>
        <Col md={8}>
          <p>
            I am a passionate software developer with expertise in **React.js, Spring Boot, MySQL, HTML, CSS, JavaScript, and Python**.
            Over the past few years, I have built **5+ company websites** and worked on **UI automation projects** using **UIPath**.
          </p>
          <p>
            My journey started with frontend development, but I have since expanded into **full-stack development**.
            I love solving problems, optimizing performance, and creating user-friendly applications.
          </p>
          <p>
            I am always looking for opportunities to learn and grow, and I enjoy collaborating with others to build **scalable and impactful** solutions.
          </p>
        </Col>
      </Row>

      {/* Additional Section */}
      <section className="mt-5">
        <h3 className="text-center">Why Work With Me?</h3>
        <Row className="text-center mt-3">
          <Col md={4}>
            <h5>🚀 Fast & Scalable Code</h5>
            <p>Writing clean and optimized code for high performance.</p>
          </Col>
          <Col md={4}>
            <h5>🎨 UI/UX Focused</h5>
            <p>Ensuring user-friendly and visually appealing designs.</p>
          </Col>
          <Col md={4}>
            <h5>🤝 Collaborative & Adaptable</h5>
            <p>Great at working with teams and adapting to new challenges.</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default About;
