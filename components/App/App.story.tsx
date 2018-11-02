import { storiesOf } from "@storybook/react-native";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import figmaDecorator from "storybook-addon-figma";
// import { App } from "./App";

import * as usage from "./App.usage";

let figma =
  "https://www.figma.com/file/OWJzZno8PNd5bABas6y3uxxP/Untitled?node-id=1%3A6694";

let story = storiesOf("App", module);

if (figma) {
  story = story.addDecorator(
    figmaDecorator({
      url: figma
    })
  );
}

for (const example in usage) {
  story = story.add(example, usage[example]);
}
