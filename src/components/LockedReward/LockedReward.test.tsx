import { shallow } from "enzyme";
import * as usage from "./LockedReward.usage";

describe("<LockedReward />", () => {
  for (const example in usage) {
    it(`renders well in ${example} mode`, () => {
      const x = (usage as any)[example]();
      const wrapper = shallow(x);
      expect(wrapper).toMatchSnapshot();
    });
  }
});
