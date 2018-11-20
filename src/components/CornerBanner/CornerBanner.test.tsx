import { shallow } from "enzyme";
import * as usage from "./CornerBanner.usage";

describe("<CornerBanner />", () => {
  for (const example in usage) {
    it(`renders well in ${example} mode`, () => {
      const x = (usage as any)[example]();
      const wrapper = shallow(x);
      expect(wrapper).toMatchSnapshot();
    });
  }
});
