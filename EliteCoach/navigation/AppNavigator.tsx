import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { WorkoutDraftProvider } from '../context/WorkoutContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GreenAppTheme } from '../themes/greenTheme';

import HomeScreen from '../screens/HomeScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import EnterWorkoutScreen from '../screens/EnterWorkoutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const MyDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...GreenAppTheme.colors,
    },
  };

  function WorkoutsStack() {
    return (
      <WorkoutDraftProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="WorkoutsScreen"
            component={WorkoutsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnterWorkoutScreen"
            component={EnterWorkoutScreen}
            options={{ title: "Today's Workout" }}
          />
        </Stack.Navigator>
      </WorkoutDraftProvider>
    );
  }

  return (
    <NavigationContainer theme={MyDarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName = 'home';
            if (route.name === 'Workouts') iconName = 'barbell';
            else if (route.name === 'Profile') iconName = 'person';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: GreenAppTheme.colors.primary,
          tabBarInactiveTintColor: '#888',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workouts" component={WorkoutsStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
