import React from "react";

import * as HeaderStories from "../components/Header.stories";
import { Profile } from "./Profile";

export default {
  title: "Page/Profile",
  component: Profile,
};

const Template = (args) => <Profile {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
