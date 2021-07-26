// import { Attraction, Car } from 'grommet-icons';

import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

export const OnlyHeaderLayoutHeader = (props) => {
  //   return <div>{props.children}</div>;
  return (
    <div className="mb-3">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="h5">Name</span>
            <span class="badge rounded-pill bg-primary ms-1">10</span>
          </a>
          <div className="d-flex">
            <a href="" className="me-3">
              <FeatherIcon className="" icon="plus-square" />
            </a>
            {/* TODO: replace with avatar component  */}
            <FeatherIcon className="me-3" icon="user" />
            {/* TODO: replace with dropdown component  */}
            <FeatherIcon className="me-3" icon="menu" />
          </div>
        </div>
      </nav>
    </div>
  );
};
