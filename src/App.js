import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import BlogDetails from "./components/BlogDetails";
import BlogAdmin from "./components/BlogAdmin";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<BlogList />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
        {/* <Route path="/blog/:id" element={<BlogDetail />} /> */}
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/admin/blogs" element={<BlogAdmin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
