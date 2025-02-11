import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={blog.image} alt={blog.title} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.shortDescription}</Card.Text>
        <Link to={`/blog/${blog.id}`} className="btn btn-primary">
          Read More
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
