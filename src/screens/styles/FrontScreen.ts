import {StyleSheet} from 'react-native';

import Colors from '../../global/Colors';
import {offsets, shadow} from '../../global/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchContainer: {
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
  loader: {alignItems: 'center', justifyContent: 'center'},
  contentContaynerStyle: {
    flexGrow: 1,
  },
});

export default styles;
