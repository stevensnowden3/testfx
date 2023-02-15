import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    {/* <div className="logo" data-testid="footer-logo" /> */}
    <div className="text-center">
      <img src="/logo.png" className="rounded img-fluid" alt="My Image" />
    </div>
    <p data-testid="footer-text">
      Material Checklist System provided by <a href="https://umeme.co.ug">Umeme</a>
    </p>
  </footer>
);

export default Footer;
