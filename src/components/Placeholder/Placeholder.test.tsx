import * as React from "react";
import { shallow } from "enzyme";
import * as usage from "./Placeholder.usage";
import "jest-styled-components";
import styled from "styled-components";
import { View } from "react-native";
import { Placeholder } from ".";

describe("<Placeholder />", () => {
  for (const example in usage) {
    const x = (usage as any)[example]();
    it(`renders well in ${example} mode`, () => {
      expect(shallow(x)).toMatchSnapshot();
    });
  }

  it(`renders the right orientation`, () => {
    let wrapper = shallow(<Placeholder />);
    expect(wrapper.dive()).toHaveStyleRule("flex-direction", "row");
    wrapper = shallow(<Placeholder orientation="column" />);
    expect(wrapper.dive()).toHaveStyleRule("flex-direction", "column");
  });
});
