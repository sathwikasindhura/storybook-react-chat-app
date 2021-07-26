import React from 'react';
import { OnlyHeader } from './OnlyHeader';

export default {
  title: 'Layout/OnlyHeader',
  component: OnlyHeader,
};

const Template = (args) => <OnlyHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
