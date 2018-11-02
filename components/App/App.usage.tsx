import { App } from "./App";
import React from "react";
import { boolean, text, number } from "@storybook/addon-knobs";

export const basic = () => <App />;

export const advanced = () => (
  <App advanced={false} message={text("Message", "message goes here")} />
);
