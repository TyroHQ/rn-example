import { shallow } from "enzyme";
import * as usage from "./WhiteButton.usage";

describe("<WhiteButton />", () => {
  for (const example in usage) {
    it(`renders well in ${example} mode`, () => {
      const x = (usage as any)[example]();
      const wrapper = shallow(x);
      expect(wrapper).toMatchSnapshot();
    });
  }
});
