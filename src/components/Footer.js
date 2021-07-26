import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "./footer.css";

export const Footer = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <footer class="blog-footer">
    <p>
      Blog template built for
      <a href="https://getbootstrap.com/">Bootstrap</a> by
      <a href="https://twitter.com/mdo">@mdo</a>.
    </p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
);

Footer.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  user: null,
};
