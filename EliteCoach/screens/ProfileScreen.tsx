import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WhiteText from '../components/customTexts';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <WhiteText>Your Profile</WhiteText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22 },
});
