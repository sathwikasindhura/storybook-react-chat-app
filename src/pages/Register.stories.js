import React from "react";

import * as HeaderStories from "../components/Header.stories";
import { Register } from "./Register";

export default {
  title: "Page/Register",
  component: Register,
};

const Template = (args) => <Register {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
