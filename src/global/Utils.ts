import {Platform} from 'react-native';

export enum SCREENS {
  FRONT = 'FRONT',
  DRAWER = 'DRAWER',
  ARTICLE = 'ARTICLE',
  FULL_ARTICLE = 'FULL_ARTICLE',
};

export const isIOS = Platform.OS === 'ios';
