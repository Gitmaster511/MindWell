import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import MoodTrackerPage from './MoodTrackerPage';
import ViewMoodPage from './ViewMoodPage';
const Stack = createStackNavigator();

export default function moodtracknavigate() {
  return (
  <Stack.Navigator independant={true}>
    <Stack.Screen name="MoodTrackerPage" component={MoodTrackerPage} />
    <Stack.Screen name="ViewMoodPage" component={ViewMoodPage} />

  </Stack.Navigator>
  );
}
