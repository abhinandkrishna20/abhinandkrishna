import React, { useEffect, useState } from "react";
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from "../services/BlogService";

const BlogAdmin = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogData, setBlogData] = useState({ title: "", content: "", author: "" });
    const [editMode, setEditMode] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            const response = await getAllBlogs();
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editMode) {
                await updateBlog(currentId, blogData);
                setEditMode(false);
                setCurrentId(null);
            } else {
                await createBlog(blogData);
            }
            setBlogData({ title: "", content: "", author: "" });
            loadBlogs();
        } catch (error) {
            console.error("Error saving blog:", error);
        }
    };

    const handleEdit = (blog) => {
        setBlogData({ title: blog.title, content: blog.content, author: blog.author });
        setEditMode(true);
        setCurrentId(blog.id);
    };

    const handleDelete = async (id) => {
        try {
            await deleteBlog(id);
            loadBlogs();
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Blog Admin Panel</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <input type="text" placeholder="Title" className="form-control mb-2"
                    value={blogData.title} onChange={(e) => setBlogData({ ...blogData, title: e.target.value })} />
                <textarea placeholder="Content" className="form-control mb-2"
                    value={blogData.content} onChange={(e) => setBlogData({ ...blogData, content: e.target.value })} />
                <input type="text" placeholder="Author" className="form-control mb-2"
                    value={blogData.author} onChange={(e) => setBlogData({ ...blogData, author: e.target.value })} />
                <button type="submit" className="btn btn-primary">{editMode ? "Update Blog" : "Add Blog"}</button>
            </form>
            <ul className="list-group">
                {blogs.map(blog => (
                    <li key={blog.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{blog.title}</strong> by {blog.author}
                        </div>
                        <div>
                            <button onClick={() => handleEdit(blog)} className="btn btn-sm btn-warning me-2">Edit</button>
                            <button onClick={() => handleDelete(blog.id)} className="btn btn-sm btn-danger">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogAdmin;
