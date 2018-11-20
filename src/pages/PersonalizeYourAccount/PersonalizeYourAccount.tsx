import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "@src/components/Placeholder";

const PersonalizeYourAccountContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class PersonalizeYourAccount extends React.Component<{}> {
  static defaultProps: PersonalizeYourAccount["props"];
  render() {
    return (
      <Placeholder>
        <Placeholder>Header bar</Placeholder>
        <Placeholder>
          Content area
          <Placeholder>Header text</Placeholder>
          <Placeholder>Explainer text</Placeholder>
          <Placeholder>User icon</Placeholder>
          <Placeholder>Explainer text</Placeholder>
          <Placeholder>
            Input fields
            <Placeholder>Input textfield</Placeholder>
            <Placeholder>Input textfield</Placeholder>
            <Placeholder>Input textfield</Placeholder>
          </Placeholder>
          <Placeholder>Explainer text</Placeholder>
          <Placeholder>
            Radio buttons
            <Placeholder>
              Radio button1
              <Placeholder>Selected radiobox</Placeholder>
              <Placeholder>Input placeholder</Placeholder>
            </Placeholder>
            <Placeholder>
              Radio button2
              <Placeholder>Unselected radiobox</Placeholder>
              <Placeholder>Input placeholder</Placeholder>
            </Placeholder>
          </Placeholder>
          <Placeholder>
            Rectangular buttons
            <Placeholder>Rectangular buttonleft</Placeholder>
            <Placeholder>Rectangular buttonright</Placeholder>
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
