import React, {memo, useMemo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {faArrowLeft, faBars, faSearch} from '@fortawesome/free-solid-svg-icons';

import {isIOS} from '../global/Utils';
import {iconImage} from '../global/Images';
import {offsets} from '../global/Constants';
import {RootStackParamList} from '../global/Types';
import {FRONT_SCREEN_TITLE} from '../global/Strings';
import {useSafeAreaPaddings} from '../global/Hooks/useSafeAreaPaddings';

import HeaderButton from './HeaderButton';

import styles from './styles/CustomHeader';

type Props = {
  showCompleteHeader?: boolean;
  hasOnlyBackButton?: boolean;
  onSearchPress?: () => void;
  onLogoPress?: () => void;
};

const CustomHeader = ({
  showCompleteHeader,
  hasOnlyBackButton,
  onSearchPress = () => {},
  onLogoPress,
}: Props) => {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  const {paddingTop} = useSafeAreaPaddings();

  const onDrawerPress = () => {
    navigation.toggleDrawer();
  };

  const onPress = () => {
    navigation.goBack();
  };


  return showCompleteHeader ? (
    <View style={[styles.container, {paddingTop}]}>
      <HeaderButton icon={faBars} onPress={onDrawerPress} />
      <Text style={styles.headerTitleStyle}>{FRONT_SCREEN_TITLE}</Text>
      <HeaderButton icon={faSearch} onPress={onSearchPress} />
    </View>
  ) : (
    <View
      style={[
        styles.container,
        hasOnlyBackButton ? styles.articlePageContainer : styles.resizedContainer,
        isIOS ? {marginTop: paddingTop - offsets.margin10} : {paddingTop},
      ]}>
      <HeaderButton
        icon={hasOnlyBackButton ? faArrowLeft : faBars}
        onPress={hasOnlyBackButton ? onPress : onDrawerPress}
        style={styles.menuButton}
      />

      {!hasOnlyBackButton && (
        <TouchableOpacity onPress={onLogoPress}>
          <Image source={iconImage} style={styles.logo} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(CustomHeader);
