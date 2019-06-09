import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <Link to="/">Back to top</Link>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="{{ site.url }}/">Visit the homepage</a> or read our <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/introduction/">getting started guide</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;
