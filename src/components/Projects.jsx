import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const projects = [
  { title: 'Company Brand Websites', description: 'Developed and deployed 5 professional websites tailored to business needs.', link: '#' },
  { title: 'Bulk Rename Application', description: 'A tool for renaming multiple files efficiently with custom rules.', link: '#' },
  { title: 'Image to PDF Converter', description: 'Converts images into PDF format for easy document handling.', link: '#' },
  { title: 'YouTube Video Downloader', description: 'A simple application to download YouTube videos for offline access.', link: '#' },
  { title: 'Video & Audio Merger', description: 'Merges video and audio files seamlessly.', link: '#' },
  { title: 'File Organizing Application', description: 'Automatically sorts and arranges files based on user-defined criteria.', link: '#' },
  { title: 'Video to MP3 Converter', description: 'Extracts audio from video files in MP3 format.', link: '#' },
  { title: 'Daily Task Reminder Application', description: 'A productivity tool that helps users stay on track with their daily tasks.', link: '#' },
  { title: 'Ongoing Projects', description: 'Several innovative projects are under development to enhance user experience and automation.', link: '#' }
];

function Projects() {
  return (
    <Container className="mt-5">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on, including company websites and automation tools.</p>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 d-flex flex-column">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                <Card.Link href={project.link} target="_blank">View on GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;