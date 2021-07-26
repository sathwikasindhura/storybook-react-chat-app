import React from 'react';
import { ConversationPage } from './ConversationPage';

export default {
  title: 'Page/ConversationPage',
  component: ConversationPage,
};

const Template = (args) => <ConversationPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};