import axios from 'axios';

const API_URL = "http://localhost:8080/api/blogs"; // Adjust as needed
// const API_URL = "/api/blogs";

export const getAllBlogs = async () => {
    return await axios.get(API_URL);
};

export const getBlogById = async (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// export const getBlogById = async (id) => {
//     return await axios.get(`${API_URL}/${id}`);
// };

export const createBlog = async (blogData) => {
    return await axios.post(API_URL, blogData);
};

export const updateBlog = async (id, blogData) => {
    return await axios.put(`${API_URL}/${id}`, blogData);
};

export const deleteBlog = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
