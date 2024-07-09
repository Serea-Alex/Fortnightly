import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {placeholderImage} from '../global/Images';
import {Article} from '../global/Types';
import {
  ARTICLE_CARD_DAYS,
  ARTICLE_CARD_HOURS,
  ARTICLE_CARD_LESS_THAN_ONE,
} from '../global/Strings';

import styles from './styles/ArticleCard';

type Props = {
  index: number;
  article: Article;
  onArticlePress: () => void;
};

const ArticleCard = ({index, article, onArticlePress}: Props) => {
  const [timePassed, setTimePassed] = useState<string>(
    ARTICLE_CARD_LESS_THAN_ONE + ARTICLE_CARD_HOURS,
  );

  useEffect(() => {
    getTimeSincePost();
  }, []);

  const getTimeSincePost = () => {
    const timeDifferenceInHours =
      (new Date().getTime() - new Date(article.publishedAt).getTime()) /
      (1000 * 60 * 60);

    const timeInDays = (timeDifferenceInHours / 24).toFixed(0);
    const timeInHours = (timeDifferenceInHours % 24).toFixed(0);

    if (parseInt(timeInDays) < 1) {
      setTimePassed(`${timeInHours} ${ARTICLE_CARD_HOURS}`);
    }

    if (parseInt(timeInDays) < 1 && parseInt(timeInHours) < 1) {
      setTimePassed(`${ARTICLE_CARD_LESS_THAN_ONE} ${ARTICLE_CARD_HOURS}`);
    }

    const time = `${timeInDays} ${ARTICLE_CARD_DAYS}`;
    setTimePassed(time);
  };

  const image = article.urlToImage
    ? {uri: article.urlToImage}
    : placeholderImage;
  return (
    <TouchableOpacity style={styles.container} onPress={onArticlePress}>
      {index === 0 && (
        <Image
          source={image}
          style={[
            styles.image,
            image === placeholderImage && styles.noAspectRation,
          ]}
        />
      )}

      <View style={styles.textAndImage}>
        <View style={styles.texts}>
          <Text style={styles.time}>{timePassed}</Text>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
            {article.title}
          </Text>
        </View>

        {index !== 0 && <Image source={image} style={styles.riightImage} />}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ArticleCard);
