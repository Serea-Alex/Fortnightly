import {StyleSheet, TextStyle} from 'react-native';

import Colors from '../../global/Colors';
import {borders, offsets, sizes} from '../../global/Constants';

const style = StyleSheet.create({
  container: {flex: 1},
  mainView: {
    justifyContent: 'center',
    borderRadius: borders.radius,
    backgroundColor: Colors.white,
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: sizes.textInput,
    marginLeft: offsets.margin10,
    color: Colors.black,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: sizes.textInput,
    paddingHorizontal: offsets.margin10,
    borderWidth: borders.width,
    borderRadius: borders.radius,
    borderColor: Colors.black,
    overflow: 'hidden',
  },
});

export default style;
