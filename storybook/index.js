import React from "react";
import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "./storyLoader";
import { withKnobsOptions } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react-native";
import { View, NativeModules } from "react-native";
import styled from "styled-components";
import url from "url";

// import "./rn-addons";

const StoryContainer = styled(View)`
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

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

export default getStorybookUI({ port: 7007, host: hostname, onDeviceUI: true });
