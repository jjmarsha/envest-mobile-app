import React, {useState} from 'react';
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

import { useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold } from '@expo-google-fonts/inter';

import {modules} from './modules.tsx';

import { useNavigation } from '@react-navigation/native';

export default function Lesson (props) {


  const [index, setCount] = useState(0);
  const navigation = useNavigation();

  const {name, i} = props.route.params;
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  const cards = modules[i].lesson;

  function CardInfo(props) {

    return (
      <View>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{props.cards[props.index].subtitle}</Text>
          <Text />
        </View>

        <CardData content={props.cards[props.index].content} />

      </View>
    );
  }

  function CardData(props) {
    if (props.content.type == 'text') {
      const text = props.content.data.map((t) =>
        <View>
          <Text style={styles.text}>{t}{"\n"}{"\n"}</Text>
        </View>
      )

      return text;
    }
    else if (props.content.type == 'definitions') {
      const text = props.content.data.map((t) =>
      <View>
        <Text style={styles.definition}>{t.name}</Text>
        <Text>{t.definition}</Text>
      </View>
      )

      return text;
    }
    else if (props.content.type == 'bullets') {
      const text = props.content.data.map((t) =>
      <View>
        <Text style={styles.bullet}>* {t}</Text>
        <Text></Text>
      </View>
      )

      return text;
    }

  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/slimes.png')}
              style={styles.slimes}
      ></Image>
      <View style={styles.card}>

        <CardInfo index={index} cards={cards} />

        <View style={styles.buttonRow}>
          <View>
            { index > 0 &&
            <TouchableOpacity style={styles.nextButton}
              onPress={() => setCount(index - 1)}>
              <Text style={styles.arrow}>{"<"}</Text>
            </TouchableOpacity> }
          </View>
          <View>
            { index < cards.length-1 &&
            <TouchableOpacity style={styles.nextButton}
              onPress={() => setCount(index + 1)}>
              <Text style={styles.arrow}>{">"}</Text>
            </TouchableOpacity> }
            { index >= cards.length-1 &&
            <TouchableOpacity style={styles.lastButton}
              onPress={() => navigation.navigate('Quiz',{ name: name, i: i})}>
              <Text style={styles.quiz}>Take the Quiz!</Text>
            </TouchableOpacity> }
          </View>
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
    fontSize: 36,
    fontFamily: 'Inter_700Bold',
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  bullet: {
    fontSize: 20,
    fontFamily: 'Inter_500Medium',
  },
  card: {
    width: '90%',
    height: '96%',
    borderRadius: 25,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextButton: {
    height:40,
    width: 40,
    backgroundColor: '#66C03F',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastButton: {
    height:40,
    width: 160,
    backgroundColor: '#66C03F',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
    marginTop: -4,
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
  quiz: {
    fontSize: 18,
    marginTop: -4,
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
  definition: {
    fontSize: 24,
    fontWeight: '700',
  },
});
