import React from "react";
import Login from "../components/account/Login";

import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {modules} from '../components/modules.tsx';

import { useNavigation } from '@react-navigation/native';
import { useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold } from '@expo-google-fonts/inter';

export default function HomeScreen (){

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  function Lessons () {
    const lessons = modules;

    const lessonsList = lessons.map((lesson) =>
      <View style={styles.lesson}>
        <View style={styles.moduleNo}>
          <Text style={styles.module}>Lesson:</Text>
          <Text style={styles.moduleNumber}>{lesson.index}</Text>
        </View>
        <View style={styles.lessonInfo}>
          <View style={styles.less}>
            <Text style={styles.title}>{lesson.title}</Text>
            <TouchableOpacity style={styles.toLesson}
              onPress={() => navigation.navigate('Lesson',
                { name: lesson.title,
                  i: lessons.indexOf(lesson),
                  index: lesson.index
                 }) }>
              <Text>></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressBarInner}/>
          </View>
        </View>
      </View>
    );

    return lessonsList;
  }

  return (
    fontsLoaded ? (
      <View style={styles.container}>
        <Image source={require('../../assets/images/slimes.png')}
                style={styles.slimes}
        ></Image>
        <ScrollView
          contentContainerStyle={{flexGrow : 1, alignItems : 'center'}}>
          <View style={styles.header}>
            <Text style={styles.headline}>Welcome Back, Timothy Li!</Text>
            <Text style={styles.sub}>Next Lesson</Text>
            <Text style={styles.sub}>Investing vs. Trading</Text>
            <TouchableOpacity style={styles.butt}
              onPress={() => navigation.navigate('Lesson',{
                name: 'Investing vs. Trading', i:0, index: '01' }) }>
              <Text style={styles.buttText}>Start Lesson Now!</Text>
            </TouchableOpacity>
          </View>

          <Lessons />

        </ScrollView>

      </View>) :

      (<View style={styles.container}>
        <Image source={require('../../assets/images/slimes.png')}
                style={styles.slimes}
        ></Image>
      </View>)
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    backgroundColor: '#fff',
    justifyContent: "center",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 12,
    width: '90%',
    margin: 20,
  },
  headline: {
    fontSize: 32,
    fontFamily: 'Inter_700Bold',
    margin: 20,
    textAlign: 'center',
  },
  slimes: {
    opacity: .2,
    width: 500,
    height: 400,
    position: 'absolute',
    top: -50,
    transform: [{ rotate: "180deg" }]
  },
  sub: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: 'grey',
    margin: 4,
  },

  butt: {
    width: '80%',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#66C03F',
    borderRadius: 12,
    margin: 8,
  },
  buttText: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: 'white',
  },

  lesson: {
    alignItems: "center",
    backgroundColor: '#fff',
    justifyContent: "center",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 12,
    width: '90%',
    flexDirection: 'row',
    marginBottom: 20,
  },

  module: {
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    color: 'grey',
  },
  moduleNo: {
    marginLeft: 8,
    marginRight: 20,
  },
  moduleNumber: {
    fontSize: 32,
    fontFamily: 'Inter_700Bold'
  },

  title: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    width: 180,
    paddingRight: 20,
  },

  toLesson: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft:-40,

  },

  less: {
    alignItems: "center",
    backgroundColor: '#fff',
    justifyContent: "center",
    flexDirection: 'row',
    marginTop: -12,
    marginBottom: 8,
  },

  progressBar: {
    width: 180,
    height: 16,
    borderRadius:20,
    borderWidth: 1,
    borderColor:'#F0f0f0',
  },

  progressBarInner: {
    width: 120,
    height: 14,
    borderRadius:20,
    backgroundColor:'#66C03F',
  },

});
