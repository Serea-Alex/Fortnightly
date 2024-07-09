import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

import Colors from '../global/Colors';
import {hitSlop, sizes} from '../global/Constants';

import styles from './styles/HeaderButton';

type Props = {
  icon: IconProp;
  style?: ViewStyle;
  onPress: () => void;
};

const HeaderButton = ({icon, style, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      hitSlop={hitSlop}>
      <FontAwesomeIcon icon={icon} size={sizes.icon} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default React.memo(HeaderButton);
