import React from "react";
import { boolean, text, number, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Placeholder } from "./Placeholder";

export const basic = () => {
  const t = text("Content", "This can be replaced");
  return (
    <Placeholder
      orientation={select(
        "Orientation",
        { row: "row", column: "column" },
        "row"
      )}
    >
      <Placeholder>{t}</Placeholder>
      <Placeholder>{t}</Placeholder>
      <Placeholder>{t}</Placeholder>
    </Placeholder>
  );
};