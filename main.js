import Expo from "expo";
import { App } from "./components/App";
import StoryBook from "./storybook";

// TODO: conditionally apply this more intelligently - __DEV__ doesn't seem to work.
const main = true ? StoryBook : App;

Expo.registerRootComponent(main);
