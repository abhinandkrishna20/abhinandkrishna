package com.blog.portfolio.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.transaction.Transactional;

import com.blog.portfolio.Model.Blog;
import com.blog.portfolio.Repository.BlogRepository;

@Service
public class BlogService {

    private final BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    @Transactional
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

    @Transactional
    public Blog updateBlog(Long id, Blog blogDetails) {
        return blogRepository.findById(id).map(blog -> {
            blog.setTitle(blogDetails.getTitle());
            blog.setContent(blogDetails.getContent());
            blog.setAuthor(blogDetails.getAuthor());
            return blogRepository.save(blog);
        }).orElseThrow(() -> new RuntimeException("Blog with ID " + id + " not found!"));
    }
}
