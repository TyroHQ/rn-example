import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const AboutUsPageContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class AboutUsPage extends React.Component<{}> {
  static defaultProps: AboutUsPage["props"];
  render() {
    return (
      <AboutUsPageContainer>
        <Placeholder>Header Bar</Placeholder>
        <Placeholder>Page Header</Placeholder>
        <Placeholder>
          Rectangle - White background
          <Placeholder>White Button</Placeholder>
          <Placeholder>White Button</Placeholder>
          <Placeholder>White Button</Placeholder>
          <Placeholder>White Button Selected</Placeholder>
          <Placeholder>White Button</Placeholder>
        </Placeholder>
        <Placeholder>Header Text - "About Getpoints"</Placeholder>
        <Placeholder>
          Explainer Text - "Getpoints is a revolutionary loyalty app powered by
          mobile payments. Customers use the Getpoints app to pay on their
          smartphone, and automatically get a loyalty card just for your store.
          Every time customers pay using the Getpoints app, their loyalty points
          are added instantly and automatically – just with one tap on their
          smartphone!"
        </Placeholder>
      </AboutUsPageContainer>
    );
  }
}
