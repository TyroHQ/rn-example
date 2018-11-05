import Expo from "expo";
import { App } from "./src/components/App";
import StoryBook from "./storybook";

// TODO: conditionally apply this intelligently - __DEV__ doesn't seem to work.
const main = true ? StoryBook : App;

Expo.registerRootComponent(main);
