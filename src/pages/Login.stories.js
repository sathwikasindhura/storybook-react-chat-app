import React from "react";

import * as HeaderStories from "../components/Header.stories";
import { Login } from "./Login";

export default {
  title: "Page/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
