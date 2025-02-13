package com.blog.portfolio.Controller;

import com.blog.portfolio.Model.Blog;
import com.blog.portfolio.Service.BlogService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/blogs")
@CrossOrigin(origins = "http://localhost:3000")
public class BlogController {
    
    @Autowired
    private BlogService blogService;

    @GetMapping
    public List<Blog> getAllBlogs() {
        return blogService.getAllBlogs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Blog>> getBlogById(@PathVariable Long id) {
        Optional<Blog> blog = blogService.findById(id);
        return blog.isPresent() ? ResponseEntity.ok(blog) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Blog> createBlog(@RequestBody Blog blog) {
        Blog savedBlog = blogService.saveBlog(blog);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedBlog);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBlog(@PathVariable Long id) {
        blogService.deleteById(id);
        return ResponseEntity.ok("Blog deleted successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable Long id, @RequestBody Blog blogDetails) {
        try {
            Blog updatedBlog = blogService.updateBlog(id, blogDetails);
            return ResponseEntity.ok(updatedBlog);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
