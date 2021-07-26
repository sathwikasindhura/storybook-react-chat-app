// import { Attraction, Car } from 'grommet-icons';

import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { OnlyHeaderLayoutHeader } from '../components/OnlyHeaderLayoutHeader';

export const OnlyHeader = (props) => {
  return (
    <div>
      <OnlyHeaderLayoutHeader />
      {props.children}
    </div>
  );
};
