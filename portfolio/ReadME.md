# 📖 Portfolio Blog API Documentation

## 🚀 Introduction
The Portfolio Blog API is a 🏗️ Spring Boot-based backend service that allows users to ✍️ manage blog 📜 posts. It provides 🛠️ CRUD operations for blogs, including fetching, creating, updating, and deleting 🗑️.

## 🛠️ Technologies Used
- ☕ Java 17
- 🌱 Spring Boot 3.x
- 🗄️ Spring Data JPA
- 🗃️ H2 Database (or 🐬 MySQL/🐘 PostgreSQL)
- 🏗️ Lombok
- 🔗 REST API
- 🔄 Axios (Frontend API calls)

## 🌐 API Endpoints

### 1️⃣ Get All Blogs
**📌 Endpoint:** `GET /api/blogs`
**📤 Response:** Returns a 📜 list of all blogs.

### 2️⃣ Get Blog by ID
**📌 Endpoint:** `GET /api/blogs/{id}`
**📤 Response:** Returns the 📝 blog with the specified ID.

### 3️⃣ Create a Blog
**📌 Endpoint:** `POST /api/blogs`
**📝 Request Body:**
```json
{
  "title": "📝 Blog Title",
  "content": "📖 Blog Content",
  "author": "✍️ Author Name"
}
```
**📤 Response:** Returns the created blog ✅.

### 4️⃣ Update a Blog
**📌 Endpoint:** `PUT /api/blogs/{id}`
**📝 Request Body:**
```json
{
  "title": "📝 Updated Title",
  "content": "📖 Updated Content",
  "author": "✍️ Updated Author"
}
```
**📤 Response:** Returns the updated blog ✅.

### 5️⃣ Delete a Blog
**📌 Endpoint:** `DELETE /api/blogs/{id}`
**📤 Response:** Returns success message ✅ if deleted.

## 💾 Service Layer - BlogService
```java
package com.blog.portfolio.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.portfolio.Model.Blog;
import com.blog.portfolio.Repository.BlogRepository;

@Service
public class BlogService {
    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    public Blog saveBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    public Optional<Blog> findById(Long id) {
        return blogRepository.findById(id);
    }

    public void deleteById(Long id) {
        if (!blogRepository.existsById(id)) {
            throw new RuntimeException("Blog with ID " + id + " not found!");
        }
        blogRepository.deleteById(id);
    }

    public boolean existsById(Long id) {
        return blogRepository.existsById(id);
    }

    public Blog updateBlog(Long id, Blog blogDetails) {
        return blogRepository.findById(id).map(blog -> {
            blog.setTitle(blogDetails.getTitle());
            blog.setContent(blogDetails.getContent());
            blog.setAuthor(blogDetails.getAuthor());
            return blogRepository.save(blog);
        }).orElseThrow(() -> new RuntimeException("Blog with ID " + id + " not found!"));
    }
}
```

## 🔮 Future Enhancements
- 🔐 User Authentication & Authorization
- 💬 Comments & 👍 Likes feature
- 🏷️ Blog Categories & Tags
- 📊 Pagination & Sorting

## ☁️ Deployment
This API can be deployed on ☁️ cloud platforms like 🟡 AWS, 🔥 Heroku, or 🟣 Render. Configure database connections accordingly 🔄.

## 🎯 Conclusion
This API serves as a 🔗 backend for a blog system in a 🌍 portfolio website. It provides essential ✍️ blog management features and can be extended with additional functionalities. 🚀

