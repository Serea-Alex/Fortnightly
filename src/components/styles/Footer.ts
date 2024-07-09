import {StyleSheet} from 'react-native';

import {offsets, shadow} from '../../global/Constants';
import Colors from '../../global/Colors';
import Fonts from '../../global/Fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: offsets.margin20,
    backgroundColor: Colors.white,
    shadowColor: Colors.gray,
    shadowOffset: {width: shadow.width, height: shadow.heightNegative3},
    shadowOpacity: shadow.opacity01,
    shadowRadius: shadow.radius,
    elevation: shadow.elevation,
  },
  shareButton: {
    padding: offsets.margin10,
    marginRight: offsets.margin20,
    backgroundColor: Colors.white,
  },
  fullArticleButton: {padding: offsets.margin10, backgroundColor: Colors.blue},
  buttonText: {...Fonts.medium16LF},
  blueText: {color: Colors.blue},
  whiteText: {color: Colors.white},
});

export default styles;
