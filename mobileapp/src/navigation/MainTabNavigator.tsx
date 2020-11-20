import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Dimensions } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import DiscussionScreen from "../screens/DiscussionScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Lesson from '../components/Lesson';
import Quiz from '../components/Quiz';
import DiscussionPost from '../components/DiscussionPost';

const HomeStack = createStackNavigator();

function HomeStacks() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerMode: 'none', headerShown : false}}/>
      <HomeStack.Screen
        name="Lesson"
        component={Lesson}
        options={({ route }) => ({ title: ('Lesson: ' + route.params.index) })}
      />
      <HomeStack.Screen
        name="Quiz"
        component={Quiz}
        options={({ route }) => ({ title: route.params.name })}
      />
    </HomeStack.Navigator>
  );
}

const GameStack = createStackNavigator();

function GameStacks() {
  return (
    <GameStack.Navigator initialRouteName="Game">
      <GameStack.Screen name="Game" component={GameScreen} />
    </GameStack.Navigator>
  );
}

const PortfolioStack = createStackNavigator();

function PortfolioStacks() {
  return (
    <PortfolioStack.Navigator initialRouteName="Portfolio">
      <PortfolioStack.Screen name="Portfolio" component={PortfolioScreen} />
    </PortfolioStack.Navigator>
  );
}

const DiscussionStack = createStackNavigator();

function DiscussionStacks() {
  return (
    <DiscussionStack.Navigator initialRouteName="Discussion">
      <DiscussionStack.Screen name="Discussion" component={DiscussionScreen} />
      <DiscussionStack.Screen
        name="DiscussionPost"
        component={DiscussionPost}
        options={({ route }) => ({ title: route.params.name })}
      />
    </DiscussionStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStacks() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{headerMode: 'none', headerShown : false}}/>
    </ProfileStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default class MainTabNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        barStyle={{backgroundColor: '#66C03F'}}
        initialRouteName="Home"
        activeColor="#fff"
        style={{ backgroundColor: 'white', width: Dimensions.get('window').width, }}>
          <Tab.Screen name="Home" component={HomeStacks}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarColor: '#66C03F'
        }}/>
          {/* <Tab.Screen name="Game" component={GameStacks}
          options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad" color={color} size={26} />
          ),
          tabBarColor: '#66C03F'
        }}/>
          <Tab.Screen name="Discussion" component={DiscussionStacks}
          options={{
          tabBarLabel: 'Discussion',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
          tabBarColor: '#66C03F'
        }}/>
          <Tab.Screen name="Portfolio" component={PortfolioStacks}
          options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="equalizer" color={color} size={26} />
          ),
          tabBarColor: '#66C03F'
        }}/> */}
          <Tab.Screen name="Profile" component={ProfileStacks} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarColor: '#66C03F'
        }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
