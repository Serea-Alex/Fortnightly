import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

import CustomHeader from '../components/CustomHeader';

import {ArticleRoute} from '../global/Types';

import styles from './styles/FullArticleScreen';

const FullArticleScreen = () => {
  const route = useRoute<ArticleRoute>();

  const {article} = route.params;

  const articleUrl = article.url.replace(/\s/g, '');

  return (
    <View style={styles.container}>
      <CustomHeader hasOnlyBackButton />

      <WebView
        source={{uri: articleUrl}}
        style={styles.container}
        useWebView2
        originWhitelist={['*']}
        mediaPlaybackRequiresUserAction={true}
      />
    </View>
  );
};

export default FullArticleScreen;
