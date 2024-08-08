/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components/shared/PrimaryButton';

const initialValue = 0;

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(initialValue);

  const onPress = (): void => {
    setCounter(counter + 1);
  };

  const onLongPress = (): void => {
    setCounter(initialValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      <PrimaryButton
        label="incrementar"
        onPress={onPress}
        onLongPress={onLongPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
