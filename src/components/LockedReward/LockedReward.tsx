import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";
import { RewardTileHeader } from "../RewardTileHeader";

const LockedRewardContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class LockedReward extends React.Component<{}> {
  static defaultProps: LockedReward["props"];
  render() {
    return (
      <Placeholder>
        LockedReward container
        <RewardTileHeader />
        <Placeholder>
          White container
          <Placeholder>
            Small point status box
            <Placeholder>Points required</Placeholder>
            <Placeholder>
              Grey container
              <Placeholder>3</Placeholder>
            </Placeholder>
          </Placeholder>
          <Placeholder>
            Small point status box
            <Placeholder>Points earned</Placeholder>
            <Placeholder>
              Grey container
              <Placeholder>1</Placeholder>
            </Placeholder>
          </Placeholder>
          <Placeholder>
            Small point status box
            <Placeholder>Points Needed</Placeholder>
            <Placeholder>
              Grey container
              <Placeholder>2</Placeholder>
            </Placeholder>
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
