import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Footer from '../components/Footer';
import CustomHeader from '../components/CustomHeader';

import {ArticleRoute} from '../global/Types';
import {placeholderImage} from '../global/Images';
import {ARTICLE_SCREEN_CONTENT_PLACEHOLDER} from '../global/Strings';

import styles from './styles/ArticleScreen';

const ArticleScreen = () => {
  const route = useRoute<ArticleRoute>();

  const {article} = route.params;

  const image = article.urlToImage
    ? {uri: article.urlToImage}
    : placeholderImage;

  return (
    <View style={styles.container}>
      <CustomHeader hasOnlyBackButton />

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainerStyle]}>
        <View>
          <Image
            source={image}
            style={[
              styles.image,
              image === placeholderImage && styles.noAspectRation,
            ]}
          />

          <View style={styles.textsContainer}>
            <Text style={styles.source}>{article.source.name}</Text>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.body}>
              {article.content
                ? article.content
                : ARTICLE_SCREEN_CONTENT_PLACEHOLDER}
            </Text>
          </View>
        </View>

        <Footer article={article} />
      </ScrollView>
    </View>
  );
};

export default ArticleScreen;
