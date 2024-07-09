import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import Colors from '../global/Colors';
import {Article, Articles, RootStackParamList} from '../global/Types';
import {useSafeAreaPaddings} from '../global/Hooks/useSafeAreaPaddings';
import {API_DOMAIN, API_KEY} from '../global/Constants';
import {
  FRONT_SCREEN_FETCH_ERROR,
  FRONT_SCREEN_RESPONSE_ERROR,
} from '../global/Strings';

import ArticleCard from '../components/ArticleCard';
import CustomHeader from '../components/CustomHeader';
import CustomTextInput from '../components/CustomTextInput';

import styles from './styles/FrontScreen';
import {SCREENS} from '../global/Utils';

type NavigationProp = StackNavigationProp<RootStackParamList, 'ARTICLE'>;

const FrontPageScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const {paddingTop, paddingBottom} = useSafeAreaPaddings();
  const listRef = useRef<FlatList>(null);

  const [data, setData] = useState<Articles>();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>();
  const [showCompleteHeader, setShowCompleteHeader] = useState<boolean>(true);
  const [text, setText] = useState<null | string>(null);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredArticles(data.articles);
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (text && text.length > 2 && filteredArticles) {
      const localFilteredMarkers = filteredArticles.filter(article =>
        article.title.toLowerCase().includes(text.toLowerCase()),
      );

      setFilteredArticles(localFilteredMarkers);
    } else {
      setFilteredArticles(data?.articles);
    }
  }, [text]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_DOMAIN + API_KEY);
      if (!response.ok) {
        throw new Error(`${FRONT_SCREEN_RESPONSE_ERROR} ${response.status}`);
      }
      const textResponse = await response.text();

      const json = JSON.parse(textResponse);

      setData(json);
    } catch (error) {
      console.error(FRONT_SCREEN_FETCH_ERROR + ' ', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetY = event.nativeEvent.contentOffset.y;

      if (data && data?.totalResults > 10) {
        if (offsetY <= 150) {
          setShowCompleteHeader(true);
        } else {
          setShowCompleteHeader(false);
        }
      }

      if (isSearchActive) setIsSearchActive(false);
    },
    [data, isSearchActive],
  );

  const onLogoPress = useCallback(() => {
    if (listRef.current) {
      listRef.current.scrollToOffset({animated: true, offset: 0});
    }
  }, [listRef]);

  const onChangeText = useCallback((value: string) => {
    setText(value);
  }, []);

  const onClosePress = useCallback(() => {
    setIsSearchActive(false);
    setFilteredArticles(data?.articles);
  }, [data]);

  const onSearchPress = useCallback(() => {
    setIsSearchActive(true);
  }, []);

  const onArticlePress = (article: Article) => {
    navigation.navigate(SCREENS.ARTICLE, {article});

    setIsSearchActive(false);
  };

  const HeaderComponent = useMemo(() => {
    if (isSearchActive) {
      return (
        <View style={[styles.searchContainer, {paddingTop}]}>
          <CustomTextInput
            onChangeText={onChangeText}
            onClosePress={onClosePress}
          />
        </View>
      );
    }

    return (
      <CustomHeader
        onLogoPress={onLogoPress}
        showCompleteHeader={showCompleteHeader}
        onSearchPress={onSearchPress}
      />
    );
  }, [
    isSearchActive,
    showCompleteHeader,
    onLogoPress,
    onSearchPress,
    onChangeText,
    onClosePress,
  ]);

  const renderItem = useCallback(
    ({item, index}: {item: Article; index: number}) => {
      return (
        <ArticleCard
          article={item}
          index={index}
          onArticlePress={() => onArticlePress(item)}
        />
      );
    },
    [],
  );

  return (
    <View style={[styles.container, {paddingBottom}]}>
      {HeaderComponent}

      <FlatList
        ref={listRef}
        data={filteredArticles}
        refreshControl={
          <RefreshControl
            onRefresh={fetchData}
            refreshing={isLoading}
            tintColor={Colors.black}
          />
        }
        renderItem={renderItem}
        keyExtractor={item => item.title}
        contentContainerStyle={styles.contentContaynerStyle}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default FrontPageScreen;
