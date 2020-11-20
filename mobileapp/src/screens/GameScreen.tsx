import React from "react";
import { Text, View } from "react-native";

export default class GameScreen extends React.Component<any, {}> {
  public render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Games! Let's play soon!</Text>
      </View>
    );
  }
}
