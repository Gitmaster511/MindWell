import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ai2 from './chat';
import moodtracknavigate from './moodTrack/moodnavigate';
import meditate from './meditate';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ai2"
        component={Ai2}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MoodTrackerPage"
        component={moodtracknavigate}
        options={{
          tabBarLabel: 'calender',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-range" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Meditate"
        component={meditate}
        options={{
          tabBarLabel: 'Meditate',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="candle" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
    </NavigationContainer>
  );
}
