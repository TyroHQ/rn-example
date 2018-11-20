import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "@src/components/Placeholder";

const SignupPage2Container = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class SignupPage2 extends React.Component<{}> {
  static defaultProps: SignupPage2["props"];
  render() {
    return (
      <Placeholder>
        page
        <Placeholder> Header </Placeholder>
        <Placeholder>
          Content
          <Placeholder>Account Verification</Placeholder>
          <Placeholder>
            For password and account security verification
          </Placeholder>
          <Placeholder orientation="row">
            <Placeholder orientation="column">
              <Placeholder>Country code</Placeholder>
              <Placeholder>Input field</Placeholder>
            </Placeholder>
            <Placeholder orientation="column">
              <Placeholder>Phone number</Placeholder>
              <Placeholder>Input field</Placeholder>
            </Placeholder>
          </Placeholder>
          <Placeholder>Enter button</Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
