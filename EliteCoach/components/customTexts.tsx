import { Text, StyleSheet } from 'react-native';
import { GreenAppTheme } from '../themes/greenTheme';

export default function WhiteText({ children }: { children: React.ReactNode }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: GreenAppTheme.colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
  },
});
