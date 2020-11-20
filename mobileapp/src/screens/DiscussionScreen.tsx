import React from "react";
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

import { useNavigation } from '@react-navigation/native';
import { useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold } from '@expo-google-fonts/inter';

export default function DiscussionScreen (){

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  function Questions() {
    const questions = [];
    questions[0] = {
      question: 'How do I invest my first $10000?',
      name: 'Chan Lee',
      responses: [
        {
          name: 'John Marshall',
          text: 'Use it to invest in startups! I heard that Envest was going to IPO.'
        },
        {
          name: 'Timothy Li',
          text: 'Contribute to Fintech startups. I happen to know a few.'
        },
      ]
    };
    questions[1] = {
      question: 'How do I invest my first $20000?',
      name: 'Lucinda Liu',
      responses: []
    };
    questions[2] = {
      question: 'Where do I go to put all of my money? I have too much money and need a place to invest',
      name: 'John Marshall',
      responses: []
    };
    questions[3] = {
      question: 'How much investment should I give to team Envest?',
      name: 'Timothy Li',
      responses: []
    };

    const questionsList = questions.map((q) =>
      <View style={styles.question}>
        <TouchableOpacity
        style={styles.touch}
        onPress={()=>navigation.navigate('DiscussionPost',{question:q})}>
          <Text style={styles.questionText}>
            {q.question}
          </Text>
          <Text style={styles.author}>
            {q.name}
          </Text>
        </TouchableOpacity>
      </View>
    );

    return questionsList;
  }

  const submitThis = (text) => {
    console.log(text + ' post');
  }

  return (
    fontsLoaded ? (
      <View style={styles.container}>
        <Image source={require('../../assets/images/slimes.png')}
                style={styles.slimes}
        ></Image>
        <ScrollView
          style={{width: '100%', paddingVertical: 20}}
          contentContainerStyle={{flexGrow : 1, alignItems : 'center'}}>

          <Questions/>
        </ScrollView>
      </View>
    ) : (
    <View style={styles.container}>
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
  slimes: {
    opacity: .2,
    width: 500,
    height: 400,
    position: 'absolute',
    top: -50,
    transform: [{ rotate: "180deg" }]
  },
  author: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: 'grey',
    margin: 4,
    marginTop: 12,
  },
  questionText: {
    fontSize: 24,
    fontFamily: 'Inter_500Medium',
    width: 200,
    paddingRight: 20,
  },
  question : {
    alignItems: "flex-start",
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 12,
    width: '90%',
    marginVertical: 8,
  },
  touch: {
    width: '100%'
  }


});
