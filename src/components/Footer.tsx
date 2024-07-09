import React from 'react';
import {View, Text, TouchableOpacity, Share} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Article, RootStackParamList} from '../global/Types';
import {SCREENS} from '../global/Utils';
import {useSafeAreaPaddings} from '../global/Hooks/useSafeAreaPaddings';
import {
  FOOTER_BUTTON_FULL_ARTICLE,
  FOOTER_BUTTON_SHARE,
  FOOTER_SHARE_FULL_STORY,
  FOOTER_SHARE_TITLE,
} from '../global/Strings';

import styles from './styles/Footer';

type NavigationProp = StackNavigationProp<RootStackParamList, 'FULL_ARTICLE'>;

type Props = {
  article: Article;
};

const Footer = ({article}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const {paddingBottom} = useSafeAreaPaddings();

  const onSharePress = () => {
    const message = `${FOOTER_SHARE_TITLE}:\n${article.title}\n\n${
      article.description
    }\n\n\n${FOOTER_SHARE_FULL_STORY}:\n${article.url.replace(/\s/g, '')}`;

    Share.share({
      message,
    });
  };

  const onFullArticlePress = () => {
    navigation.navigate(SCREENS.FULL_ARTICLE, {article});
  };

  return (
    <View style={[styles.container, {paddingBottom}]}>
      <TouchableOpacity style={styles.shareButton} onPress={onSharePress}>
        <Text style={[styles.buttonText, styles.blueText]}>
          {FOOTER_BUTTON_SHARE}
        </Text>
      </TouchableOpacity>

      {article.url && (
        <TouchableOpacity
          style={styles.fullArticleButton}
          onPress={onFullArticlePress}>
          <Text style={[styles.buttonText, styles.whiteText]}>
            {FOOTER_BUTTON_FULL_ARTICLE}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Footer;
