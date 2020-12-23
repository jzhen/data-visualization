import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <Link to="/">Back to top</Link>
        </p>
        <p>Built with ❤️ by Jimmy Zhen</p>
      </div>
    </footer>
  );
}

export default Footer;
