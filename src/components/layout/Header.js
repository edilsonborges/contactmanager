import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <Link to="/" className="nav-brand text-light" style={{textDecoration: 'none'}}>
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
              </Link>
            </li>
            <li>
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
