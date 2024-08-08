/* eslint-disable react/react-in-jsx-scope */
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <View>
      <Pressable
        onPress={() => onPress && onPress()}
        onLongPress={() => onLongPress && onLongPress()}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? 'blue' : '#5856D6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: '#4746AB',
  },
});
