import { Text, StyleSheet } from 'react-native';

export default function Tag(props) {
  return (
    <Text style={styles.paragraph}>
      {props.category}
    </Text>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 3
  }
});
