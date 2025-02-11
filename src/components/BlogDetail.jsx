import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="container mt-5">
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="img-fluid" />
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
