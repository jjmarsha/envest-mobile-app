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

import {modules} from './modules.tsx';

import { useNavigation } from '@react-navigation/native';

import { useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold } from '@expo-google-fonts/inter';

export default function Quiz (props) {

  const navigation = useNavigation();

  const [index, setCount] = useState(0);
  const [isAnswered, setAnswer] = useState(false);
  const [isCorrect, setCorrect] = useState(false);
  const [isFinished, setFinish] = useState(false);

  const {name, i} = props.route.params;
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium
  });

  const questions = modules[i].quiz;

  function AnswerResult (props) {
    const result = (props.result == true) ?
      'Your answer was correct! Great job!' :
      'Your answer was not correct! Keep trying at it!';

    const nextQuestion = (props.result == true) ?
      'Next Question' :
      'Try Again';

    return (
      <View>
      { !isFinished ?
        <View>
          <Text style={styles.subtitle}>{result}</Text>
          {!props.result ?
            <Text style={styles.hint}>{props.card.hint}</Text>
          :
            <Text style={styles.success}>{props.card.success}</Text>
          }
          <TouchableOpacity onPress={() => {
            setAnswer(false);
            if (props.result)
              setCount(index+1);
          }}>
            <Text style={styles.title}>{nextQuestion}</Text>
          </TouchableOpacity>
        </View>
      :
        <View>
          <Text style={styles.subtitle}>{result}</Text>
          <Text style={styles.success}>{props.card.success}</Text>
          <Text />
          <Text style={styles.subtitle}>Congratulations!</Text>
          <Text style={styles.subtitle}>You finished the quiz!</Text>
          <Text>{"\n"}{"\n"}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.title}>Back to the lessons!</Text>
          </TouchableOpacity>
        </View>
      }
      </View>
    );
  }

  function QuizOptions (props) {

    const checkAnswers = (num) => {
      if (props.questions[props.index].correct == num) {
        setCorrect(true);

        if (index < props.questions.length - 1) {
          // setCount(index+1);
        }
        else {
          setFinish(true)
        }
      }
      else {
        setCorrect(false)
      }

      setAnswer(true);
    };


    return (
      <View>
        { !isAnswered ?
          <View style={styles.answerCard}>
            <View>
              <Text style={styles.subtitle}>{props.questions[props.index].question}</Text>
            </View>

            <View style={styles.answerTable}>
              <View style={styles.answerRow}>
                <TouchableOpacity onPress={() => checkAnswers(0)} style={styles.answer}>
                  <Text style={styles.answerText}>{props.questions[props.index].answers[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => checkAnswers(1)} style={styles.answer}>
                  <Text style={styles.answerText}>{props.questions[props.index].answers[1]}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.answerRow}>
                <TouchableOpacity onPress={() => checkAnswers(2)} style={styles.answer}>
                  <Text style={styles.answerText}>{props.questions[props.index].answers[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => checkAnswers(3)} style={styles.answer}>
                  <Text style={styles.answerText}>{props.questions[props.index].answers[3]}</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
          :
          <AnswerResult result={isCorrect} card={props.questions[props.index]} />
        }
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/slimes.png')}
              style={styles.slimes}
      ></Image>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>

        <QuizOptions index={index} questions={questions} />

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
  answerCard: {
    flexGrow: 1,
    justifyContent: "space-between",
    marginBottom: 40,
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
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginVertical: 8,
  },
  hint: {
    fontSize: 20,
    color: 'red',
    fontFamily: 'Inter_700Bold',
    marginVertical: 8,
  },
  success: {
    fontSize: 20,
    color: '#696969',
    fontFamily: 'Inter_700Bold',
    marginVertical: 8,
  },
  card: {
    width: '90%',
    height: '96%',
    borderRadius: 25,
    backgroundColor: "#fff",
    padding: 20,
    flex: .96,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  answerTable: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  answerRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  answer: {
    minHeight:160,
    width: 140,
    backgroundColor: '#66C03F',
    borderRadius: 12,
    padding: 20,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerText: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: '#fff',
  },
  definition: {
    fontSize: 24,
    fontWeight: '700',
  },
});
