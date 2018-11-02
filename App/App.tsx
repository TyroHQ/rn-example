import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Changes are fast enough now.</Text>
        <Text>Hello from inside again.</Text>
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
