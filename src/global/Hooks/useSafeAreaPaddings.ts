import {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {offsets} from '../Constants';
import {isIOS} from '../Utils';

export const useSafeAreaPaddings = () => {
  const [paddingBottom, setPaddingBottom] = useState(offsets.margin20);
  const [paddingTop, setPaddingTop] = useState(offsets.margin20);

  const {top, bottom} = useSafeAreaInsets();

  useEffect(() => {
    if (bottom > offsets.margin20) {
      setPaddingBottom(bottom);
    }

    if (!isIOS) {
      setPaddingTop(top + offsets.margin10);
    } else {
      setPaddingTop(top);
    }
  }, [bottom, top]);

  return {paddingTop, paddingBottom};
};
