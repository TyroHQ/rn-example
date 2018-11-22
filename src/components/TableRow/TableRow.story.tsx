import { storiesOf } from "@storybook/react-native";
import figmaDecorator from "storybook-addon-figma";

import * as usage from "./TableRow.usage";

let figma = undefined;

let story = storiesOf("TableRow", module);

if (figma) {
  story = story.addDecorator(
    figmaDecorator({
      url: figma
    })
  );
}

for (const example in usage) {
  story = story.add(example, (usage as any)[example]);
}
