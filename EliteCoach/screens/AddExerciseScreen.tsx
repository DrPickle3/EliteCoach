import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWorkoutDraft } from '../context/WorkoutContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import WhiteText from '../components/customTexts';

export default function AddExerciseScreen() {
  const { startDraft, clearDraft } = useWorkoutDraft();

  useEffect(() => {
    startDraft();
  }, []);

  type WorkoutsStackParamList = {
    WorkoutsScreen: undefined;
    EnterWorkoutScreen: undefined;
    AddExerciseScreen: undefined;
  };

  type NavigationProp = NativeStackNavigationProp<
    WorkoutsStackParamList,
    'AddExerciseScreen'
  >;

  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <WhiteText>Find and add your exercise</WhiteText>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
