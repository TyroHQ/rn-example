import { shallow } from "enzyme";
import * as usage from "./HeaderBar.usage";

describe("<HeaderBar />", () => {
  for (const example in usage) {
    it(`renders well in ${example} mode`, () => {
      const x = (usage as any)[example]();
      const wrapper = shallow(x);
      expect(wrapper).toMatchSnapshot();
    });
  }
});
