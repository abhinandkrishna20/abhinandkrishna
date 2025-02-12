import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../services/BlogService';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await getBlogById(id);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading) return <h2>Loading...</h2>;
    if (!blog) return <h2>Blog not found</h2>;

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogDetail;
