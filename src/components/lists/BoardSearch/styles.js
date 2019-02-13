import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';

export const ITEM_HEIGHT = 80;
export const SEPARATOR_HEIGHT = 1;
export const AVATAR_SIZE = 50;
export const FOOTER_HEIGHT = 80;
export const PRIMARY = colors.primary;

export default StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.light_gray
  },
  contentContainer: {
    flexGrow: 1,
  },
  separator: {
    height: SEPARATOR_HEIGHT
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 25,
    color: colors.light_gray_3,
    textAlign: 'center'
  },
  footer: {
    height: FOOTER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontWeight: 'bold',
    color: colors.light_gray_3
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    backgroundColor: colors.white,
    justifyContent: 'center',
    elevation: 1,
    borderRadius: 2,
    marginHorizontal: 4,
    marginVertical: 2
  },
  itemAvatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    marginRight: 8
  },
  itemName: {
    fontFamily: 'sans-serif-bold',
    fontSize: 16
  },
  offlineName: {
    color: colors.gray,
    fontFamily: 'sans-serif-bold',
    fontSize: 16
  },
  itemContent: {
    paddingHorizontal: 4,
    marginHorizontal: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemBody: {
    width: 250,
    alignItems: 'flex-start'
  },
  danger: {
    color: colors.light_red,
    fontWeight: 'bold'
  },
  paragraph: {
    textAlign: 'center'
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});