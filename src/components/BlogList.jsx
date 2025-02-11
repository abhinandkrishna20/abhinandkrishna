import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';

function BlogList() {
  return (
    <Container className="mt-5">
      <h2>My Blog</h2>
      <Row>
        {blogs.map((blog) => (
          <Col md={4} className="mb-4" key={blog.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.shortDescription}</Card.Text>
                <Link to={`/blog/${blog.id}`} className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BlogList;
