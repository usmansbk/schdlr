import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';

export const AVATAR_SIZE = 32;

const INPUT_WIDTH = 278;

export default StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.light_gray_3,
    flexDirection: 'row',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4
  },
  body: {
    maxWidth: INPUT_WIDTH,
    minWidth: INPUT_WIDTH
  },
  alert: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.light_gray,
    padding: 16
  },
  alertTitle: {
    width: 250
  },
  cancelText: {
    color: colors.primary,
    fontWeight: 'bold'
  },
  targetName: {
    fontWeight: 'bold'
  }
})