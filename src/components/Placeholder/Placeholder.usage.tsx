import React from "react";
import { boolean, text, number, selectV2 } from "@storybook/addon-knobs";
import { Placeholder } from "./";

export const basic = () => {
  // const t = text("Content", "This can be replaced");
  const t = "This can be replaced";
  return (
    <Placeholder
      orientation="row"
      // orientation={selectV2(
      //   "Orientation",
      //   { row: "row", column: "column" },
      //   "row"
      // )}
    >
      <Placeholder>{t}</Placeholder>
      <Placeholder>{t}</Placeholder>
      <Placeholder>{t}</Placeholder>
    </Placeholder>
  );
};

export const withNumber = () => <Placeholder>{5}</Placeholder>;
export const withString = () => <Placeholder>Hello</Placeholder>;
