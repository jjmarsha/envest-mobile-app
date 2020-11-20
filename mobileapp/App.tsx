import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Platform, Text, StyleSheet } from "react-native";
import { ApolloProvider } from "@apollo/client";

import styles from "./styles";
import { client } from "./src/database/Client";
import "react-native-gesture-handler";
import MainTabNavigator from "./src/navigation/MainTabNavigator";

export default function App() {


  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar />}

        <MainTabNavigator />
      </View>
    </ApolloProvider>
  );
}
