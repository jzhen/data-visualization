import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import plots from '../../lib/plotList';

function Homepage() {
  // render individual plot card
  function renderCard(item) {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-img-top px-4 py-5 bg-secondary text-center">
            <div className="text-light my-5">Thumbnail</div>
          </div>
          <div className="card-body">
            <p className="card-text">{item.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <Link type="button" className="btn btn-sm btn-outline-dark">
                View
              </Link>
              <a href={item.library_url} className="link-dark">
                {item.library_name}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">
            👨‍💻 Experiments in visualizing data
          </h1>
          <p className="lead text-muted">
            A personal exploration of data visualization using different open
            source charting libraries in the attempt to understand as well as to
            compare their strength and weakness.
          </p>
          <p>
            <a
              href="https://github.com/jzhen/data-visualization"
              className="btn btn-primary btn-lg mx-2 my-2"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="ml-2">Source</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jimmy-zhen-6612691/"
              className="btn btn-secondary btn-lg mx-2 my-2"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="ml-2">Connect</span>
            </a>
          </p>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">{plots.map((item) => renderCard(item))}</div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
