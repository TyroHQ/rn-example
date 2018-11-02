import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "./storyLoader";
import { withKnobsOptions } from "@storybook/addon-knobs";
import { addDecorator } from "@storybook/react-native";

// import "./rn-addons";

addDecorator(
  withKnobsOptions({
    debounce: { wait: 200, leading: true },
    timestamps: true
  })
);

// import stories
configure(loadStories, module);

export default getStorybookUI({});
