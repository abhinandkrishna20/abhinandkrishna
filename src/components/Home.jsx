// src/components/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="text-center mt-5">
      <div className="p-5 bg-light rounded">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I am a software developer with 3+ years of experience in building professional and responsive websites.
        </p>
        <Button variant="primary" href="/projects">View My Projects</Button>
      </div>
    </Container>
  );
}
export default Home