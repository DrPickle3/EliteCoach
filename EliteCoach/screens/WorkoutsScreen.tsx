import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WhiteText from '../components/customTexts';

export default function WorkoutsScreen() {
  return (
    <View style={styles.container}>
      <WhiteText>Today's Workouts</WhiteText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22 },
});
