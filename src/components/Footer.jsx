import React from 'react';

const Footer = () => {
  return (
    <footer className="d-flex bg-dark text-light text-center footer align-items-center justify-content-center">
      <div className="container-fluid">
        <p>&copy; {new Date().getFullYear()} Free-Games All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;