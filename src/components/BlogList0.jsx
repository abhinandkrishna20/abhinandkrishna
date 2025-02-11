import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from './BlogCard';
import blogs from '../data/blogs.json';

function BlogList() {
  return (
    <Container className="mt-5">
      <h2>My Blog</h2>
      <Row>
        {blogs.map((blog) => (
          <Col md={4} className="mb-4" key={blog.id}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BlogList;
