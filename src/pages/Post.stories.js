import React from "react";

import * as HeaderStories from "../components/Header.stories";
import { Post } from "./Post";

export default {
  title: "Page/Post",
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
