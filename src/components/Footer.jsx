// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <Container>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;