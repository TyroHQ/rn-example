import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "@src/components/Placeholder";

const SignUpPage1Container = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class SignUpPage1 extends React.Component<{}> {
  static defaultProps: SignUpPage1["props"];
  render() {
    return (
      <Placeholder>
        Sign up page container
        <Placeholder>Header bar</Placeholder>
        <Placeholder>
          Content Area
          <Placeholder>Sign Up Now Header</Placeholder>
          <Placeholder>First Name Entry Field</Placeholder>
          <Placeholder>Last Name Entry Field</Placeholder>
          <Placeholder>Password Entry Field</Placeholder>
          <Placeholder>Confirm Password Entry Field</Placeholder>
          <Placeholder>Next Button</Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
