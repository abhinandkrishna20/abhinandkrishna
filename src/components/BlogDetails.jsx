import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../services/BlogService";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        getBlogById(id).then(response => {
            setBlog(response.data);
        }).catch(error => {
            console.error("Error fetching blog:", error);
        });
    }, [id]);

    if (!blog) return <p>Loading...</p>;

    return (
        <div className="container mt-4">
            <h2>{blog.title}</h2>
            <p><strong>Author:</strong> {blog.author}</p>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogDetails;
