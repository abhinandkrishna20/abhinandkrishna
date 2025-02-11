// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3" >
      <Container>
      <div className="mb-2">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaYoutube size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;