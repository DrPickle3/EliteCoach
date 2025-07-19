import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWorkoutDraft } from '../context/WorkoutContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function EnterWorkoutScreen() {
  const { startDraft, clearDraft } = useWorkoutDraft();

  useEffect(() => {
    startDraft();
  }, []);

  type WorkoutsStackParamList = {
    WorkoutsScreen: undefined;
    EnterWorkoutScreen: undefined;
  };

  type NavigationProp = NativeStackNavigationProp<
    WorkoutsStackParamList,
    'WorkoutsScreen'
  >;

  const navigation = useNavigation<NavigationProp>();

    useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Finish Workout"
          onPress={() => {
            clearDraft();
            navigation.navigate('WorkoutsScreen');
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Log your workout here</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
