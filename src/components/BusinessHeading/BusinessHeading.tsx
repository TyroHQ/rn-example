import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'
import { Placeholder } from "../Placeholder";

const BusinessHeadingContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class BusinessHeading extends React.Component<{}> {
  static defaultProps: BusinessHeading["props"];
  render() {
    return <BusinessHeadingContainer>
      <Placeholder>Business Logo</Placeholder>
      <Placeholder>Cover Business Info</Placeholder>
      <Placeholder>Cover Photo</Placeholder>
    </BusinessHeadingContainer>
  }
}
