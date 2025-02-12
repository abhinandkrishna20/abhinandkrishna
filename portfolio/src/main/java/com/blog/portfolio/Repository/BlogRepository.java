package com.blog.portfolio.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.blog.portfolio.Model.Blog;



public interface BlogRepository extends JpaRepository<Blog, Long> {
    
}
