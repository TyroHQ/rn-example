import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";
import { RewardTileHeader } from "../RewardTileHeader";

const StampsTileContainer = styled.View`
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
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>unselected radio box</Placeholder>
              <Placeholder>unselected radio box</Placeholder>
            </Placeholder>
            <Placeholder>
              Radio boxes down
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>selected radio box</Placeholder>
              <Placeholder>unselected radio box</Placeholder>
              <Placeholder>unselected radio box</Placeholder>
            </Placeholder>
          </Placeholder>
          <Placeholder>Get stamped button left</Placeholder>
          <Placeholder>Redeem button right</Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
