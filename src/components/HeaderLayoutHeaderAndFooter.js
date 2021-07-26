import React from "react";
import FeatherIcon from "feather-icons-react";

export const HeaderLayoutHeaderAndFooter = (props) => {
  return (
    <div className="mb-3">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <FeatherIcon className="" icon="chevron-left" />
            {/* TODO: replace with avatar component  */}
            <FeatherIcon className="me-3" icon="user" />
            <span className="h5">Name</span>
          </a>
          <div className="d-flex">
            <a href="" className="me-3">
              <FeatherIcon className="" icon="message-square" />
            </a>
            <FeatherIcon className="me-3" icon="video" />
            <FeatherIcon className="me-3" icon="phone" />
          </div>
        </div>
      </nav>
    </div>
  );
};
