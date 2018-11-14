import { storiesOf } from "@storybook/react-native";
import figmaDecorator from "storybook-addon-figma";

import * as usage from "./InputPlaceholder.usage";

let figma = undefined;

let story = storiesOf("InputPlaceholder", module);

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
