import React from "react";
import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "./storyLoader";
import { withKnobsOptions } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react-native";
import styled from "styled-components/native";

// import "./rn-addons";

const StoryContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const CenterDecorator = storyFn => <StoryContainer>{storyFn()}</StoryContainer>;
addDecorator(CenterDecorator);

addDecorator(
  withKnobsOptions({
    debounce: { wait: 200, leading: true },
    timestamps: true
  })
);

// import stories
configure(loadStories, module);

export default getStorybookUI({});
