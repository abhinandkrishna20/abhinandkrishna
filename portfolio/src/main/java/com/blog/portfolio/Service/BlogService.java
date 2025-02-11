package com.blog.portfolio.Service;

import java.util.List;

import com.blog.portfolio.Model.Blog;
import com.blog.portfolio.Repository.BlogRepository;

public class BlogService {
     private BlogRepository blogRepository;

     public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    public Blog saveBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    
}
