import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GetPointsButton } from "./GetPointsButton";

export class App extends React.Component<{
  advanced?: boolean;
  message?: string;
}> {
  render() {
    return (
      <View style={styles.container}>
        {this.props.advanced ? <Text>ADVANCED MODE</Text> : null}
        <Text>Open up App.tsx to start working on your buttoned app!</Text>
        {this.props.message ? <Text>{this.props.message}</Text> : null}
        <GetPointsButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
