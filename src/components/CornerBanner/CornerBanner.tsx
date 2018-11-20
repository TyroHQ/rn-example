import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const CornerBannerContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class CornerBanner extends React.Component<{}> {
  static defaultProps: CornerBanner["props"];
  render() {
    return <Placeholder>Corner banner</Placeholder>;
  }
}
