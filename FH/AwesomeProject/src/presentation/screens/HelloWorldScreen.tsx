/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({name = 'World'}: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        Hello, {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontSize: 45,
    color: 'black',
    padding: 20,
    textAlign: 'center',
  },
});
