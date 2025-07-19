import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useWorkoutDraft } from '../context/WorkoutContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import WhiteText from '../components/customTexts';
import GreenButton from '../components/customButtons';

export default function WorkoutsScreen() {
  const { hasDraft } = useWorkoutDraft();
  const { startDraft } = useWorkoutDraft();
  const { clearDraft } = useWorkoutDraft();

  type WorkoutsStackParamList = {
    WorkoutsScreen: undefined;
    EnterWorkoutScreen: undefined;
  };

  type NavigationProp = NativeStackNavigationProp<
    WorkoutsStackParamList,
    'EnterWorkoutScreen'
  >;

  const navigation = useNavigation<NavigationProp>();
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <GreenButton
        title="Start New Workout"
        onPress={() => {
          startDraft();
          navigation.navigate('EnterWorkoutScreen');
        }}
      />
      {isFocused && hasDraft && (
        <View style={styles.popupContainer}>
          <WhiteText>You have a workout in progress</WhiteText>
          <GreenButton title="Discard" onPress={() => clearDraft()} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  popupContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#222', // Dark background
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },

  popupText: {
    marginBottom: 10,
  },
});
