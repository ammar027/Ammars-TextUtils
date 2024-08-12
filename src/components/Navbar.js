import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ title = '', aboutText = 'About', mode = 'light', theme = 'light', setTheme, toggleMode }) {
  // Get the text for the dropdown button based on the current theme
  const getDropdownText = () => {
    switch (theme) {
      case 'dark':
        return 'Dark';
      case 'dark-blue':
        return 'Nightly Blue';
      case 'dark-green':
        return 'Nightly Green';
      default:
        return 'Theme';
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {mode === 'dark' && (
              <div className="nav-item dropdown me-2">
                <button className={`btn btn-${mode} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
                  {getDropdownText()}
                </button>
                <ul className={`dropdown-menu dropdown-menu-${mode}`}>
                  <li><button className="dropdown-item" onClick={() => setTheme('dark')}>Dark</button></li>
                  <li><button className="dropdown-item" onClick={() => setTheme('dark-blue')}>Nightly Blue</button></li>
                  <li><button className="dropdown-item" onClick={() => setTheme('dark-green')}>Nightly Green</button></li>
                </ul>
              </div>
            )}
            <div className={`form-check form-switch ms-1 mx-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={mode === 'dark'} />
              <label className="form-check-label d-flex mx-1 align-items-center" htmlFor="flexSwitchCheckDefault">
                {mode === 'light' ? (
                  <i className="bi bi-sun"></i> // Light mode icon
                ) : (
                  <i className="bi bi-moon"></i> // Dark mode icon
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string,
  theme: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
  toggleMode: PropTypes.func.isRequired
}
