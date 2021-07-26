// import { Attraction, Car } from 'grommet-icons';

import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

export const ConversationsListItem = ({ avatar, name, lastMessageBrief }) => {
  return (
    <div>
      <div className="d-flex align-items-center my-3">
        <div className="flex-shrink-0">
          {/* <img src="..." alt="..." /> */}
          {/* TODO: replace with avatar component  */}
          <FeatherIcon className="me-3" icon="user" />
        </div>
        <div className="flex-grow-1 ms-3">
          <h5>{name}</h5>
          {lastMessageBrief}
        </div>
        <div className="">
          {/* TODO: replace with dropdown component  */}
          <FeatherIcon className="me-3" icon="menu" />
        </div>
      </div>
    </div>
  );
};
