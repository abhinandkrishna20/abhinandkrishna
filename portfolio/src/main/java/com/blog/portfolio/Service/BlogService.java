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
        // TODO Auto-generated method stub
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

    
}
