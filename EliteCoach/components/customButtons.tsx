import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GreenAppTheme } from '../themes/greenTheme';

type Props = {
  title: string;
  onPress: () => void;
};

export default function GreenButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: GreenAppTheme.colors.primary,
    padding: GreenAppTheme.spacing.medium,
    borderRadius: GreenAppTheme.borderRadius.default,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
