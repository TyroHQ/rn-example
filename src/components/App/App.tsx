import React from "react";
import { Text, View } from "react-native";
import { Placeholder } from "../Placeholder";

export class App extends React.Component<{}> {
  render() {
    return (
      <View>
        <Text>Open up App.tsx to start working on your new app!</Text>
        <Placeholder>Does this work?</Placeholder>
        <Placeholder orientation="row">
          <Placeholder>This is row inner</Placeholder>
          <Placeholder>This is second row inner</Placeholder>
          <Placeholder>This is third row inner</Placeholder>
        </Placeholder>
        <Placeholder orientation="column">
          <Placeholder>This is inner Column</Placeholder>
          <Placeholder>This is second inner</Placeholder>
          <Placeholder>This is third inner</Placeholder>
        </Placeholder>
      </View>
    );
  }
}
