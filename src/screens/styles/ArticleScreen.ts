import {StyleSheet} from 'react-native';

import Colors from '../../global/Colors';
import {offsets, sizes} from '../../global/Constants';
import Fonts from '../../global/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {flexGrow: 1, justifyContent: 'space-between'},
  headerIcon: {
    paddingLeft: offsets.margin20,
    paddingRight: offsets.margin15,
    width: sizes.icon + offsets.margin20 + offsets.margin15,
  },
  image: {aspectRatio: 1, width: '100%'},
  noAspectRation: {aspectRatio: undefined},
  textsContainer: {
    padding: offsets.margin20,
  },
  source: {
    ...Fonts.medium18LF,
    color: Colors.black,
  },
  title: {
    marginTop: offsets.margin10,
    ...Fonts.bold24LF,
    color: Colors.black,
  },
  body: {
    marginTop: offsets.margin20,
    ...Fonts.regular16LF,
    color: Colors.black,
  },
});

export default styles;
