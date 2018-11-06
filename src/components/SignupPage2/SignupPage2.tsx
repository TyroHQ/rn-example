import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const SignupPage2Container = styled.View`
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
            <Placeholder>Country code</Placeholder>
            <Placeholder>Phone number</Placeholder>
          </Placeholder>
          <Placeholder>Enter button</Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
