import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../services/BlogService";
import { Link } from "react-router-dom";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getAllBlogs().then((response) => {
            setBlogs(response.data);
        }).catch(error => {
            console.error("Error fetching blogs:", error);
        });
    }, []);

    return (
        <div className="container mt-4">
            <h2>Blog Posts</h2>
            <div className="list-group">
                {blogs.map(blog => (
                    <Link key={blog.id} to={`/blog/${blog.id}`} className="list-group-item list-group-item-action">
                        <h5>{blog.title}</h5>
                        <p>{blog.author}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
