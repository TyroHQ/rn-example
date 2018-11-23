import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const ChangePasswordPageContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class ChangePasswordPage extends React.Component<{}> {
  static defaultProps: ChangePasswordPage["props"];
  render() {
    return (
      <ChangePasswordPageContainer>
        <Placeholder>Header Bar</Placeholder>
        <Placeholder>Header Text - "Change Your Password"</Placeholder>
        <Placeholder>
          Group
          <Placeholder>Explainer Text - "Old Password"</Placeholder>
          <Placeholder>Input field - "Minimum 6 Characters"</Placeholder>
        </Placeholder>
        <Placeholder>
          Group
          <Placeholder>Explainer Text - "New Password"</Placeholder>
          <Placeholder>Input field - "Minimum 6 Characters"</Placeholder>
        </Placeholder>
        <Placeholder>
          Group
          <Placeholder>Explainer Text - "Confirm New Password"</Placeholder>
          <Placeholder>Input field - "Minimum 6 Characters"</Placeholder>
        </Placeholder>
        <Placeholder>Rectangular Button - "CHANGE PASSWORD"</Placeholder>
      </ChangePasswordPageContainer>
    );
  }
}
