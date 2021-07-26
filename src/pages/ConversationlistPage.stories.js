import React from 'react';
import { ConversationListPage } from './ConversationlistPage';

export default {
  title: 'Page/ConversationListPage',
  component: ConversationListPage,
};

const Template = (args) => <ConversationListPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
