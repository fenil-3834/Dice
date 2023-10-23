import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceIamge} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceIamge, setDiceIamge] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceIamge(DiceOne);
        break;
      case 2:
        setDiceIamge(DiceTwo);
        break;
      case 3:
        setDiceIamge(DiceThree);
        break;
      case 4:
        setDiceIamge(DiceFour);
        break;
      case 5:
        setDiceIamge(DiceFive);
        break;
      case 6:
        setDiceIamge(DiceSix);
        break;

      default:
        setDiceIamge(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <>
      <View style={styles.conatiner}>
        <Dice imageUrl={diceIamge} />
        <Pressable onPress={rollDiceOnTap}>
          <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceIamge: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
});

export default App;
