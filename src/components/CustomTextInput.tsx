import React, {useState} from 'react';
import {View, TextInput, ViewStyle, TouchableOpacity} from 'react-native';
import {faSearch, faX} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import Colors from '../global/Colors';
import {hitSlop, sizes} from '../global/Constants';
import {CUSTOM_TEXT_INPUT_PLACEHOLDER} from '../global/Strings';

import style from './styles/TextInput';

type Props = {
  inputValue?: string;
  viewStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onChangeText: (value: string) => void;
  onClosePress: () => void;
};

const CustomTextInput = ({
  inputValue,
  viewStyle,
  containerStyle,
  onChangeText,
  onClosePress,
}: Props) => {
  const [value, setValue] = useState<string>(inputValue || '');

  return (
    <View style={[style.container, containerStyle]}>
      <View style={style.mainView}>
        <View style={[style.textInputView, viewStyle]}>
          <FontAwesomeIcon
            icon={faSearch}
            size={sizes.icon}
            color={Colors.black}
          />

          <TextInput
            autoCorrect={false}
            spellCheck={false}
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoComplete={'off'}
            style={style.textInput}
            placeholder={CUSTOM_TEXT_INPUT_PLACEHOLDER}
            placeholderTextColor={Colors.black}
            onChangeText={text => {
              setValue(text);
              onChangeText && onChangeText(text);
            }}
            value={value}
          />

          <TouchableOpacity onPress={onClosePress} hitSlop={hitSlop}>
            <FontAwesomeIcon
              icon={faX}
              size={sizes.icon}
              color={Colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomTextInput;
