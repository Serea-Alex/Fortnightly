import {StyleSheet} from 'react-native';

import {offsets, sizes} from '../../global/Constants';
import Colors from '../../global/Colors';
import Fonts from '../../global/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: offsets.margin20,
    marginHorizontal: offsets.margin20,
    marginBottom: offsets.margin20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  textAndImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    aspectRatio: 1,
    width: '100%',
    marginTop: offsets.margin20,
    marginBottom: offsets.margin5,
  },
  noAspectRation: {aspectRatio: undefined},
  riightImage: {
    aspectRatio: 1,
    width: sizes.articleCardImage,
    marginLeft: offsets.margin20,
  },
  texts: {flex: 1},
  time: {
    ...Fonts.medium16LF,
    textAlign: 'left',
    color: Colors.gray,
  },
  title: {
    ...Fonts.medium16LF,
    textAlign: 'left',
    marginTop: offsets.margin5,
    color: Colors.black,
  },
});

export default styles;
