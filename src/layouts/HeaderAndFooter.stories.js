import React from 'react';
import { HeaderAndFooter } from './HeaderAndFooter';

export default {
  title: 'Layout/HeaderAndFooter',
  component: HeaderAndFooter,
};

const Template = (args) => <HeaderAndFooter {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};