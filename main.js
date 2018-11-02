import Expo from "expo";
import { App } from "./components/App";
import StoryBook from "./storybook";

const main = true ? StoryBook : App;

Expo.registerRootComponent(main);
