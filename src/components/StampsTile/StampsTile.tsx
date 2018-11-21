import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";
import { RewardTileHeader } from "../RewardTileHeader";
import { Icon } from "../Icon";
import { RectangularButton} from "../RectangularButton";

const StampsTileContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class StampsTile extends React.Component<{}> {
  static defaultProps: StampsTile["props"];
  render() {
    return (
      <Placeholder>
        Unlocked stamps open
        <RewardTileHeader />
        <Placeholder>
          White container
          <Placeholder>
            Radio boxes container
            <Placeholder>
              Radio boxes up
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
            </Placeholder>
            <Placeholder>
              Radio boxes down
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
              <Icon />
            </Placeholder>
          </Placeholder>
          <RectangularButton />
          <RectangularButton />
        </Placeholder>
      </Placeholder>
    );
  }
}
