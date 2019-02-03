import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';

export const AVATAR_SIZE = 150;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green'
  },
  appbar: {
    elevation: 0,
    borderRadius: 0,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  headline: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-bold',
    textAlign: 'center'
  },
  subheading: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  note: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.light_gray_3
  },
  caption: {
    fontSize: 16
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  footerText: {
    color: colors.gray,
    fontFamily: 'sans-serif-bold',
    fontSize: 20,
    fontWeight: 'bold'
  },
  count: {
    color: colors.light_gray_3,
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 8,
    marginBottom: 4
  },
  label: {
    color: colors.light_gray_3,
    fontSize: 16,
  },
  countRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'blue'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16
  }
});
