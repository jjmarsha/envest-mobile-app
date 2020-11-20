import React from "react";
import {  Image,
          Button,
          Platform,
          ScrollView,
          StyleSheet,
          Text,
          TouchableOpacity,
          View, } from "react-native";

import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';

export default function ProfileScreen () {

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image  source= {require('../../assets/images/timLi.png')}
                style={styles.avatar}
        ></Image>
        <Text style={styles.headline}>Timothy Li</Text>
        <Text style={styles.sub}>7 Lessons Completed</Text>
        <Text style={styles.sub}>Member Since: 2020</Text>
      </View>

      <View style={styles.buttContainer}>
        <TouchableOpacity   style={styles.butt}>
          <Text style={styles.buttText}>Edit Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.butt}>
          <Text style={styles.buttText}>Copy Referral</Text>
        </TouchableOpacity>
        <TouchableOpacity   style={styles.butt}>
          <Text style={styles.buttText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },

  buttContainer: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    borderRadius: 200,
    width: 100,
    height: 100,
    margin: 12,
  },

  header: {
    alignItems: "center",
    backgroundColor: '#fff',
    justifyContent: "center",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    width: '90%',
    margin: 12,
  },

  headline: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    margin: 20,
  },

  sub: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: 'grey',
    margin: 4,
  },
  butt: {
    width: '90%',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: '#C4C4C4',
    borderRadius: 20,
    margin: 8,
  },
  buttText: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: 'white',
  },
});
