import {StyleSheet} from 'react-native';

import Fonts from '../../global/Fonts';
import Colors from '../../global/Colors';
import {offsets, shadow, sizes} from '../../global/Constants';

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'space-between',
    padding: offsets.margin10,
    backgroundColor: Colors.white,
    borderBottomColor: Colors.gray,
    shadowColor: Colors.black,
    shadowOffset: {width: shadow.width, height: shadow.height2},
    shadowOpacity: shadow.opacity02,
    shadowRadius: shadow.radius,
    elevation: shadow.elevation,
  },
  resizedContainer: {
    justifyContent: undefined,
    position: 'absolute',
    maxWidth: sizes.icon + sizes.logo + offsets.margin20 * 3,
    paddingHorizontal: 0,
    paddingBottom: offsets.margin10,
  },
  articlePageContainer: {
    paddingRight: offsets.margin20,
    justifyContent: 'center',
    position: 'absolute',
    maxWidth: sizes.icon + offsets.margin20 * 2,
  },
  menuButton: {
    marginLeft: offsets.margin10,
  },
  headerTitleStyle: {
    ...Fonts.bold20LF,
    color: Colors.black,
  },
  logo: {
    width: sizes.logo,
    height: sizes.logo,
    marginLeft: offsets.margin20,
  },
});

export default styles;
