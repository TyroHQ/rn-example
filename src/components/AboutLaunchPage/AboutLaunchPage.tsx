import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'
import { Placeholder } from "../Placeholder";

const AboutLaunchPageContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class AboutLaunchPage extends React.Component<{}> {
  static defaultProps: AboutLaunchPage["props"];
  render() {
    return <AboutLaunchPageContainer>
      <Placeholder>Header Bar</Placeholder>
      <Placeholder>Page Header</Placeholder>
      <Placeholder>White Button</Placeholder>
      <Placeholder>White Button</Placeholder>
      <Placeholder>White Button</Placeholder>
      <Placeholder>White Button</Placeholder>
      <Placeholder>White Button</Placeholder>
    </AboutLaunchPageContainer>
  }
}
