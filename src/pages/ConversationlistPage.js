// import { Attraction, Car } from 'grommet-icons';

import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { OnlyHeader } from '../layouts/OnlyHeader';
import { ConversationsListItem } from '../components/ConversationsListItem';

const data = [
  {
    avatar: 'url',
    name: 'john',
    lastMessageBrief: 'lorem',
  },
  {
    avatar: 'url',
    name: 'jane',
    lastMessageBrief: 'lorem',
  },
  {
    avatar: 'url',
    name: 'doe',
    lastMessageBrief: 'lorem',
  },
];
export const ConversationListPage = (props) => {
  return (
    <div>
      <OnlyHeader>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        {data.map((item, index) => (
          <ConversationsListItem
            avatar={item.avatar}
            name={item.name}
            lastMessageBrief={item.lastMessageBrief}
          />
        ))}
      </OnlyHeader>
    </div>
  );
};
