import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import GreenButton from '../components/customButtons';
import WhiteText from '../components/customTexts';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <WhiteText>🏋️ Welcome to EliteCoach</WhiteText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
