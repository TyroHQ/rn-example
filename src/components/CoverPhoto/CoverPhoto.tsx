import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const CoverPhotoContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class CoverPhoto extends React.Component<{}> {
  static defaultProps: CoverPhoto["props"];
  render() {
    return <Placeholder>Cover photo</Placeholder>;
  }
}
