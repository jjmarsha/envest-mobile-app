import React from "react";
import { Text, View } from "react-native";
import { Singlestockapi } from '../external/singlestockapi';

export default class PortfolioScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Stonkx!</Text>
        <Singlestockapi />
      </View>
    );
  }
}
