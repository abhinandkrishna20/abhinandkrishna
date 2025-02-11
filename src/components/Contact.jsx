// src/components/Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;