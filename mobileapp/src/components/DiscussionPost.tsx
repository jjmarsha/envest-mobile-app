import React, {useState} from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import { useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold } from '@expo-google-fonts/inter';

export default function DiscussionPost (props) {

  const [text, setText] = useState('');

  const {question} = props.route.params;
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  function Responses () {
    const responseList = question.responses.map((a) =>
      <View>
          <Text style={styles.questionText}>
            {a.text}
          </Text>
          <Text style={styles.authorResponse}>
            {a.name}
          </Text>
      </View>
    );

    return responseList;
  }



  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/slimes.png')}
              style={styles.slimes}
      ></Image>
      <View style={styles.card}>
        <Text style={styles.title}>{question.question}</Text>
        <Text style={styles.author}>{question.name}</Text>

        <View style={styles.responses}>
          <Responses />
        </View>
        <View>
          <TextInput
            style={{height: 40}}
            placeholder="Add your response!"
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
          <TouchableOpacity>
            <Text>Submit Response</Text>
          </TouchableOpacity>
        </View>
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
  slimes: {
    opacity: .2,
    width: 500,
    height: 400,
    position: 'absolute',
    top: -50,
    transform: [{ rotate: "180deg" }]
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#66C03F',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    marginVertical: 8,
  },
  author: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: 'grey',
    margin: 4,
    marginTop: 12,
  },
  authorResponse: {
    fontSize: 12,
    alignSelf: 'flex-end',
    fontFamily: 'Inter_700Bold',
    color: 'grey',
    margin: 4,
    marginTop: 12,
  },
  responses: {
    width: '92%',
    margin: 20,
  },
  questionText: {
    fontSize: 20,
    alignSelf: 'flex-end',
    fontFamily: 'Inter_500Medium',
    width: 200,
    paddingRight: 20,
    marginTop: 12,
  },
  card: {
    width: '90%',
    height: '96%',
    borderRadius: 25,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
