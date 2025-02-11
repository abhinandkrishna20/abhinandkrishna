import axios from 'axios';

const API_URL = "http://localhost:8081/api/blogs"; // Adjust as needed

export const getAllBlogs = async () => {
    return await axios.get(API_URL);
};

export const getBlogById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const createBlog = async (blogData) => {
    return await axios.post(API_URL, blogData);
};

export const updateBlog = async (id, blogData) => {
    return await axios.put(`${API_URL}/${id}`, blogData);
};

export const deleteBlog = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
