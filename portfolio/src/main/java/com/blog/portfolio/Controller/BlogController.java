package com.blog.portfolio.Controller;

import com.blog.portfolio.Model.Blog;
import com.blog.portfolio.Service.BlogService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


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
        if (blog == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(blog);
    }

    @PostMapping
    public Blog createBlog(@RequestBody Blog blog) {
        return blogService.saveBlog(blog);
    }

    @DeleteMapping("/{id}")
    public String deleteBlog(@PathVariable Long id) {
        blogService.deleteById(id);
        return "Blog deleted successfully";
    }

    @PutMapping("/{id}")
public ResponseEntity<Blog> updateBlog(@PathVariable Long id, @RequestBody Blog blogDetails) {
    try {
        Blog updatedBlog = blogService.updateBlog(id, blogDetails,);
        return ResponseEntity.ok(updatedBlog);
    } catch (RuntimeException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}
}