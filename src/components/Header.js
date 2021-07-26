import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./header.css";

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <div className="container">
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <a className="link-secondary" href="#">
            Subscribe
          </a>
        </div>
        <div className="col-4 text-center">
          <a className="blog-header-logo text-dark" href="#">
            Large
          </a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a className="link-secondary" href="#" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="mx-3"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Search</title>
              <circle cx="10.5" cy="10.5" r="7.5" />
              <path d="M21 21l-5.2-5.2" />
            </svg>
          </a>
          {user ? (
            <Button
              className="btn btn-sm btn-outline-secondary"
              size="small"
              onClick={onLogout}
              label="Log out"
            />
          ) : (
            <>
              <Button
                className="btn btn-sm btn-outline-secondary"
                size="small"
                onClick={onLogin}
                label="Log in"
              />
              <Button
                className="btn btn-sm btn-outline-secondary"
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )}
        </div>
      </div>
    </header>
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <a className="p-2 link-secondary" href="#">
          World
        </a>
        <a className="p-2 link-secondary" href="#">
          U.S.
        </a>
        <a className="p-2 link-secondary" href="#">
          Technology
        </a>
        <a className="p-2 link-secondary" href="#">
          Design
        </a>
        <a className="p-2 link-secondary" href="#">
          Culture
        </a>
        <a className="p-2 link-secondary" href="#">
          Business
        </a>
        <a className="p-2 link-secondary" href="#">
          Politics
        </a>
        <a className="p-2 link-secondary" href="#">
          Opinion
        </a>
        <a className="p-2 link-secondary" href="#">
          Science
        </a>
        <a className="p-2 link-secondary" href="#">
          Health
        </a>
        <a className="p-2 link-secondary" href="#">
          Style
        </a>
        <a className="p-2 link-secondary" href="#">
          Travel
        </a>
      </nav>
    </div>
  </div>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
