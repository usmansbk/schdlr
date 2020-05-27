import { computed } from 'mobx';
import { StyleSheet } from 'react-native';
import { dark, light } from 'config/colors';
import {
  events,
  schedules,
  searchEvents,
  bookmarkedEvents,
  people_list,
  schedule_events,
  comments_list,
  event_search,
  more_list,
  schedule_search,
  WIDTH,
  BANNER,
  dp
} from 'lib/constants';

export default class AppStyles {
  constructor(settingsStore) {
    this.settings = settingsStore;
  }

  @computed get sheet() {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: colors.bg
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        paddingTop: 8,
      },
      header: {
        padding: 8,
        paddingBottom: 16
      },
      body: {
        padding: 8
      },
      title: {
        fontSize: 25,
        fontWeight: 'bold'
      },
      message: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.light_gray_3
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    });
  }

  @computed get media() {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      view: {
        paddingTop: 8,
        borderWidth: 1,
        borderColor: colors.light_gray,
        justifyContent: 'center',
      },
      image: {
        height: 200,
      },
      caption: {
        paddingHorizontal: 4
      },
      docName: {
        fontSize: 14,
        margin: 0,
        padding: 0
      },
      docContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        backgroundColor: colors.light_gray,
      },
      docBody: {
        flex: 1,
        paddingVertical: 4,
      },
      mediaIcon: {
        width: 40,
        height: 40
      }
    });
  }

  @computed get fileSelect () {
    const colors = this.settings.dark ? dark : light;
    const ITEM_HEIGHT = 60;

    return StyleSheet.create({
      view: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.bg,
      },
      container: {
        marginHorizontal: 4,
        height: ITEM_HEIGHT,
      },
      itemContainer: {
        width: ITEM_HEIGHT,
        marginHorizontal: 2,
        marginVertical: 4,
        backgroundColor: colors.light_gray_2,
      },
      itemContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    });
  }

  @computed get chipList() {
    const colors = this.settings.dark ? dark : light;
    
    return StyleSheet.create({
      container: {
        backgroundColor: colors.bg,
        height: dp(36),
      },
      itemContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.light_gray,
        margin: 4,
        paddingHorizontal: 12,
        borderRadius: dp(16)
      },
      selected : {
        backgroundColor: colors.primary_light,
        borderColor: colors.light_gray,
      },
      itemText: {
        textAlign: 'center',
        color: colors.gray
      },
      selectedText: {
        color: colors.white
      }
    });
  }

  @computed get locationInput() {
    const colors = this.settings.dark ? dark : light;
    
    return StyleSheet.create({
      inputContainer: {
        marginBottom: 12
      },
      input: {
        borderColor: colors.placeholder,
        borderRadius: 4,
        borderWidth: 1 * StyleSheet.hairlineWidth,
        padding: 4,
        height: dp(48),
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginRight: 8
      }
    });
  }

  @computed get login() {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: colors.bg
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 32
      },
      h1: {
        fontSize: 27,
        color: colors.black,
        textAlign: 'center'
      },
      caption: {
        textAlign: 'center',
        color: colors.gray
      }
    });
  }

  @computed get userSchedulesTab () {
    const colors = this.settings.dark ? dark : light;
    
    return StyleSheet.create({
      barStyle: {
        elevation: 0,
        backgroundColor: colors.bg,
        borderTopWidth: 0
      },
      indicatorStyle: {
        backgroundColor: colors.primary
      }
    });
  }

  @computed get topTab () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        flex: 1
      },
      barStyle: {
        elevation: 0,
        backgroundColor: colors.bg,
      },
      indicatorStyle: {
        backgroundColor: colors.primary
      }
    });
  }

  @computed get bottomTab () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        flex: 1
      },
      barStyle: {
        elevation: 0,
        backgroundColor: colors.bg,
      }
    });
  }

  @computed get tag() {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      text: {
        fontFamily: 'sans-serif-bold',
        fontWeight: 'bold'
      },
      cancelled: {
        color: colors.light_red,
      },
      ongoing: {
        color: colors.green
      },
      done: {
        color: colors.tint,
      },
      upcoming: {
        color: colors.yellow,
      },
      closed: {
        color: colors.light_red,
        fontSize: 12
      },
      concluded: {
        color: colors.tint,
      }
    });
  }

  @computed get customTypes () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        justifyContent: 'center'
      },
      content: {
        height: dp(48),
        justifyContent: 'center'
      },
      text: {
        color: colors.black
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
    });    
  }

  @computed get places() {
    const colors = this.settings.dark ? dark : light;
    return StyleSheet.create({
      contentContainer: {
        backgroundColor: colors.bg
      },
      textInputContainer: {
        backgroundColor: colors.light_gray_2,
        height: dp(54)
      },
      textInput: {
        backgroundColor: colors.textInput,
        color: colors.black,
      },
      itemText: {
        color: colors.black
      },
      poweredText: {
        color: colors.gray
      }
    });
  }

  @computed get picker () {
    const colors = this.settings.dark ? dark : light;
    
    return StyleSheet.create({
      contentContainer: {
        padding: 16,
        backgroundColor: colors.bg,
      },
      textInputContainer: {
        flexDirection: 'row'
      },
      textInput: {
        flex: 1
      },
      text: {
        fontFamily: 'sans-serif-medium'
      },
      button: {
        height: dp(48),
        justifyContent: 'center',
        // paddingHorizontal: 8,
        // borderWidth,
        // borderRadius: 4,
        borderColor: colors.placeholder
      },
      container: {
        flex: 1
      },
      content: {
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: colors.bg,
      },
      placeholder: {
        color: colors.black
      },
    });
  }

  @computed get datePicker () {
    const colors = this.settings.dark ? dark : light;
    const borderWidth = 1 * StyleSheet.hairlineWidth;

    return StyleSheet.create({
      date: {
        flexDirection: 'row',
      },
      button: {
        flexGrow: 1
      },
      text: {
        color: colors.primary,
        // marginVertical: 8,
        fontWeight: 'bold'
      },
      pickerButton: {
        fontFamily: 'sans-serif-medium'
      },
      dateButton: {
        flex: 1,
        // borderWidth,
        // borderColor: colors.placeholder,
        height: dp(48),
        justifyContent: 'center',
        // paddingHorizontal: 8,
        // borderRightWidth: 0,
        // borderTopLeftRadius: 4,
        // borderBottomLeftRadius: 4,
      },
      timeButton: {
        // borderWidth,
        borderColor: colors.placeholder,
        height: dp(48),
        justifyContent: 'center',
        // paddingHorizontal: 8,
        // borderLeftWidth: 0,
        // borderTopRightRadius: 4,
        // borderBottomRightRadius: 4,
      }
    });    
  }

  @computed get scheduleForm () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        backgroundColor: colors.bg
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.bg,
        paddingHorizontal: 16,
        elevation: 0
      },
      form: {
        padding: 16,
        marginBottom: 10
      },
      switchButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8
      },
      checkbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 4
      },
      text: {
        fontSize: 12,
      },
      textInput: {
        backgroundColor: colors.textInput
      },
      primary: {
        color: colors.primary
      },
      info: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 16
      }
    });
  }

  @computed get eventForm () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        backgroundColor: colors.bg
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      },
      form: {
        padding: 16,
        marginBottom: 10
      },
      text: {
        color: colors.primary,
        marginVertical: 8,
      },
      textInput: {
        backgroundColor: colors.textInput,
        fontFamily: 'sans-serif-medium',
      },
      input: {
        marginVertical: 8,
      },
      radio: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      radioText: {
        // fontFamily: 'sans-serif-light',
        fontSize: 12,
        // color: colors.primary,
        marginRight: 16,
        // marginVertical: 4
      },
      pickerSpacing: {
        marginVertical: 10
      },
      picker: {
        height: dp(48),
        color: colors.black,
        borderWidth: 1,
        borderColor: colors.gray,
        backgroundColor: colors.bg
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.bg,
        paddingHorizontal: 16,
        elevation: 0,
      },
    });    
  }

  @computed get loading () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bg
      },
    });
  }

  @computed get error () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: colors.bg
      },
      headline: {
        fontSize: 25,
        color: colors.light_gray_3,
        textAlign: 'center'
      },
      content: {
        margin: 16
      }
    });
  }

  @computed get commentInput () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        borderTopWidth: 1,
        borderColor: colors.light_gray_3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        backgroundColor: colors.bg,
        maxWidth: WIDTH,
        minWidth: WIDTH,
      },
      placeholder: {
        color: colors.black
      },
      textInput: {
        color: colors.black
      },
      right: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      avatar: {
        paddingRight: 4
      },
      input: {
        flex: 1
      },
      alert: {
        maxWidth: WIDTH,
        minWidth: WIDTH,
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
    });
  }

  @computed get eventDetails () {
    const colors = this.settings.dark ? dark : light;

    return  StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.bg
      },
      title: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingVertical: 4
      },
      date: {
        color: colors.gray,
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 4
      },
      headNote: {
        flexDirection: 'row'
      },
      status: {
        fontFamily: 'sans-serif-light',
        fontSize: 18,
      },
      note: {
        // fontFamily: 'sans-serif-bold',
        color: colors.gray,
        fontWeight: 'bold'
      },
      head: {
        marginVertical: 8,
      },
      body: {
        marginVertical: 8
      },
      content: {
        marginHorizontal: 20,
        marginVertical: 4
      },
      label: {
        fontSize: 13,
        marginVertical: 2
      },
      value: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      linkStyle: { color: '#2980b9' },
      item: {
        marginVertical: 12
      },
      nav: {
        // color: colors.primary
      },
      red: {
        color: colors.light_red
      }
    });
  }

  @computed get scheduleInfo () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.bg,
        paddingBottom: 12,
        paddingHorizontal: 12
      },
      linkStyle: { color: '#2980b9' },
      avatar: {
        padding: 10
      },
      head: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      name: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: "center"
      },
      label: {
        color: colors.black,
        fontSize: 16,
      },
      item: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
      },
      count: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 25,
      },
      countRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.light_gray,
        padding: 16,
        borderRadius: 8
      },
      body: {
        flex: 2,
      },
      note: {
        textAlign: 'left',
        fontSize: 16,
        color: colors.gray,
        marginHorizontal: 4,
      },
      noteView: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 8
      },
      description: {
        fontSize: 18,
        fontFamily: 'sans-serif-bold',
        marginVertical: 8
      },
    });
  }

  @computed get scheduleSearch () {
    const colors = this.settings.dark ? dark : light;
    const {
      ITEM_HEIGHT,
      SEPARATOR_HEIGHT,
      AVATAR_SIZE,
      FOOTER_HEIGHT,
    } = schedule_search;

    return StyleSheet.create({
      list: {
        flex: 1,
        backgroundColor: colors.bg
      },
      contentContainer: {
        flexGrow: 1,
        backgroundColor: colors.bg
      },
      separator: {
        height: SEPARATOR_HEIGHT
      },
      empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
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
        backgroundColor: colors.bg,
        paddingHorizontal: 8
      },
      itemContent: {
        height: ITEM_HEIGHT,
        paddingLeft: 8,
        paddingRight: 4,
        alignItems: 'center',
        flexDirection: 'row',
      },
      itemBody: {
        width: 250,
        alignItems: 'flex-start',
        marginLeft: 8
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
      },
      rightIcon: {
        borderRadius: 5,
        position: 'absolute',
        top: dp(17),
        right: dp(17),
      },
    });
  }

  @computed get eventSearch () {
    const colors = this.settings.dark ? dark : light;
    const {
      ITEM_HEIGHT,
      SEPARATOR_HEIGHT,
    } = event_search;

    return StyleSheet.create({
      list: {
        backgroundColor: colors.bg
      },
      contentContainer: {
        flexGrow: 1,
        backgroundColor: colors.bg
      },
      footer: {
        height: dp(80),
        justifyContent: 'center',
        alignItems: 'center'
      },
      footerText: {
        fontWeight: 'bold',
        color: colors.light_gray_3
      },
      empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
      },
      emptyTitle: {
        fontSize: 25,
        color: colors.light_gray_3,
        textAlign: 'center'
      },
      itemContainer: {
        height: ITEM_HEIGHT,
        backgroundColor: colors.bg,
        paddingHorizontal: 16
      },
      itemContent: {
        flexDirection: 'row',
        flex: 1
      },
      itemHeadline: {
        fontSize: 20,
        fontFamily: 'sans-serif',
      },
      left: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
      },
      right: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8,
      },
      cancelled: {
        fontSize: 16,
        color: colors.light_red
      },
      time: {
        fontFamily: 'sans-serif-bold',
        fontSize: 14,
        color: colors.gray,
      },
      separator: {
        height: SEPARATOR_HEIGHT
      },
      itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      footerIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 32
      },
      iconBadge: {
        marginLeft: 4,
      },
      paragraph: {
        textAlign: 'center'
      },
      counts: {
        flexDirection: 'row'
      },
      scheduleName: {
        width: 150
      }
    });
  }

  @computed get notifications () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      list: {
        backgroundColor: colors.bg,
        // paddingVertical: 8,
      },
      contentContainer: {
        flexGrow: 1,
        backgroundColor: colors.bg
      },
      empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      emptyTitle: {
        fontSize: 25,
        color: colors.light_gray_3,
      },
      emptyMessage: {
        textAlign: 'center',
        fontSize: 16
      },
      footer: {
        height: dp(80),
        justifyContent: 'center',
        alignItems: 'center'
      },
      footerText: {
        fontWeight: 'bold',
        color: colors.light_gray_3
      },
      paragraph: {
        textAlign: 'center'
      },
      itemContainer: {
        backgroundColor: colors.bg,
        maxWidth: WIDTH,
        minWidth: WIDTH,
      },
      unseen: {
        backgroundColor: colors.light_gray_4
      },
      itemContent: {
        height: dp(80),
        paddingVertical: 4,
        paddingHorizontal: 8,
        flexDirection: 'row',
      },
      messageItemContent: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        flexDirection: 'row',
      },
      itemBody: {
        marginLeft: 8,
        flex: 1
      },
      boldText: {
        fontWeight: 'bold',
        color: colors.black
      },
      dateLine: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      icon: {
        marginRight: 8
      },
      indicator: {
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.bg,
        color: '#fff',
        position: 'absolute',
        top: 0,
        right: 0
      },
      avatar: {
        alignSelf: 'flex-start',
        paddingVertical: 4,
      },
      message: {
        paddingHorizontal: 4,
        backgroundColor: colors.light_gray
      },
      itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      divider: {
        height: 2,
        backgroundColor: colors.bg
      },
      counter: {
        margin: 8,
        right: 18
      }
    });
  }

  @computed get discover () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      list: {
        backgroundColor: colors.bg
      },
      contentContainer: {
        flexGrow: 1
      },
      item: {
        width: '100%',
        height: dp(50),
        borderBottomColor: '#0002',
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
        justifyContent: 'center'
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
      paragraph: {
        textAlign: 'center'
      },
    });
  }

  @computed get scheduleEvents () {
    const colors = this.settings.dark ? dark : light;
    const {
      ITEM_HEIGHT,
      SEPARATOR_HEIGHT,
    } = schedule_events;

    return StyleSheet.create({
      contentContainer: {
        backgroundColor: colors.bg,
        flexGrow: 1
      },
      list: {
        backgroundColor: colors.bg,
      },
      footer: {
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
      },
      footerText: {
        fontWeight: 'bold',
        color: colors.light_gray_3
      },
      offlineTitle: {
        fontSize: 20,
        color: colors.gray,
      },
      empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
      },
      emptyTitle: {
        fontSize: 25,
        color: colors.light_gray_3,
        textAlign: 'center'
      },
      separator: {
        height: SEPARATOR_HEIGHT,
      },
      itemContainer: {
        backgroundColor: colors.bg,
        paddingHorizontal: 16,
      },
      itemContent: {
        paddingTop: 4,
        height: ITEM_HEIGHT,
        flexDirection: 'row',
      },
      itemBody: {
        paddingTop: 4,
        paddingLeft: 8,
        flex: 1,
      },
      itemHeadline: {
        fontSize: 20,
      },
      itemNote: {
        fontSize: 16,
        color: colors.gray,
      },
      left: {
        padding: 8,
        paddingTop: 16
      },
      cancelled: {
        fontSize: 16,
        color: colors.light_red
      },
      time: {
        fontSize: 14,
        color: colors.gray
      },
      status: {
        color: colors.gray,
      },
      duration: {
        color: colors.gray,
      },
      durationRow: {
        flexDirection: 'row'
      },
      paragraph: {
        textAlign: 'center'
      },
    });
  }

  @computed get commentsList () {
    const colors = this.settings.dark ? dark : light;

    const { SEPARATOR_HEIGHT } = comments_list;

    return StyleSheet.create({
      list: {
        backgroundColor: colors.bg,
      },
      contentContainer: {
        flexGrow: 1,
        margin: 1,
        backgroundColor: colors.bg
      },
      itemContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.bg,
        paddingVertical: 8,
        marginVertical: 8
      },
      itemContent: {
        marginRight: 8
      },
      linkStyle: { color: '#2980b9' },
      itemHeader: {
        justifyContent: 'space-between',
      },
      itemLeft: {
        paddingLeft: 8
      },
      itemRight: {
        flex: 1,
        padding: 4,
        borderRadius: 2
      },
      authorName: {
        fontFamily: 'sans-serif-bold',
        color: colors.black,
        fontWeight: 'bold'
      },
      separator: {
        height: SEPARATOR_HEIGHT
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: dp(48) 
        // marginTop: 2
      },
      actions: {
        // justifyContent: 'flex-end',
        flexDirection: 'row',
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
      paragraph: {
        textAlign: 'center'
      },
    });    
  }

  @computed get peopleList () {
    const colors = this.settings.dark ? dark : light;

    const {
      ITEM_HEIGHT,
      SEPARATOR_HEIGHT,
      FOOTER_HEIGHT
    } = people_list;

    return StyleSheet.create({
      list: {
        backgroundColor: colors.bg
      },
      contentContainer: {
        flexGrow: 1,
        backgroundColor: colors.bg
      },
      separator: {
        height: SEPARATOR_HEIGHT,
      },
      itemContainer: {
        backgroundColor: colors.bg,
        height: ITEM_HEIGHT
      },
      itemContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
      },
      itemRight: {
        justifyContent: 'center',
        marginLeft: 16
      },
      itemText: {
        fontFamily: 'sans-serif-bold',
        fontWeight: 'bold',
        fontSize: 16,
        width: 250
      },
      footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: FOOTER_HEIGHT
      },
      footerText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16
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
    });
  }

  @computed get bookmarkedEventsList () {
    const colors = this.settings.dark ? dark : light;

    const {
      ITEM_HEIGHT,
      SEPARATOR_HEIGHT,
    } = bookmarkedEvents;

    return StyleSheet.create({
      contentContainer: {
        backgroundColor: colors.bg,
        // marginTop: 1,
        flexGrow: 1
      },
      list: {
        backgroundColor: colors.bg,
      },
      footer: {
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
      },
      footerText: {
        fontWeight: 'bold',
        color: colors.light_gray_3
      },
      offlineTitle: {
        fontSize: 20,
        color: colors.gray,
      },
      empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
      },
      emptyTitle: {
        fontSize: 25,
        color: colors.light_gray_3,
        textAlign: 'center'
      },
      separator: {
        height: SEPARATOR_HEIGHT,
      },
      itemContainer: {
        backgroundColor: colors.bg,
        paddingHorizontal: 16,
      },
      itemContent: {
        // paddingVertical: 4,
        height: ITEM_HEIGHT,
        flexDirection: 'row',
      },
      unavailableItemContent: {
        paddingTop: 4,
        height: dp(40),
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between'
      },
      itemBody: {
        paddingLeft: 8,
        flex: 1,
      },
      itemHeadline: {
        fontSize: 20,
        textAlignVertical: 'center'
      },
      itemNote: {
        fontSize: 16,
        color: colors.gray,
      },
      left: {
        padding: 8,
        paddingTop: 12,
        alignItems: 'center',
      },
      right: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 4
      },
      cancelled: {
        fontSize: 16,
        color: colors.light_red
      },
      time: {
        fontSize: 14,
        color: colors.gray
      },
      status: {
        color: colors.gray,
      },
      duration: {
        color: colors.gray,
      },
      durationRow: {
        flexDirection: 'row'
      },
      paragraph: {
        textAlign: 'center'
      },
    });
  }

  @computed get carousel() {
    const colors = this.settings.dark ? dark : light;
    return StyleSheet.create({
      container: {
        width: dp(200),
        height: dp(150),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        elevation: 2,
        borderRadius: 8,
        backgroundColor: colors.bg
      },
      image: {
        width: '94%',
        height: 148
      },
      text: {
        fontSize: 20,
        // fontWeight: 'bold',
        color: colors.gray
      }
    });
  }

  @computed get searchEventsList () {
    const colors = this.settings.dark ? dark : light;

    const {
      ITEM_HEIGHT,
      SEPARATOR_HEIGHT,
    } = searchEvents;

    return StyleSheet.create({
      contentContainer: {
        backgroundColor: colors.bg,
        marginTop: 1,
        flexGrow: 1
      },
      list: {
        backgroundColor: colors.bg,
      },
      footer: {
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
      },
      footerText: {
        fontWeight: 'bold',
        color: colors.light_gray_3
      },
      offlineTitle: {
        fontSize: 20,
        fontFamily: 'sans-serif-bold',
        color: colors.gray,
      },
      empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
      },
      emptyTitle: {
        fontSize: 25,
        color: colors.light_gray_3,
        textAlign: 'center'
      },
      separator: {
        height: SEPARATOR_HEIGHT,
      },
      itemContainer: {
        backgroundColor: colors.bg,
        paddingHorizontal: 16,
      },
      itemContent: {
        paddingVertical: 4,
        height: ITEM_HEIGHT,
        flexDirection: 'row',
      },
      itemBody: {
        paddingTop: 4,
        marginLeft: 8,
        flex: 1,
      },
      itemHeadline: {
        fontSize: 20,
      },
      itemNote: {
        fontSize: 16,
        color: colors.gray,
      },
      left: {
        padding: 8,
        paddingTop: 16
      },
      right: {
        justifyContent: 'space-between',
        flex: 1
      },
      cancelled: {
        fontSize: 16,
        color: colors.light_red
      },
      time: {
        fontSize: 14,
        color: colors.gray
      },
      status: {
        color: colors.gray,
      },
      duration: {
        color: colors.gray,
      },
      durationRow: {
        flexDirection: 'row'
      },
      paragraph: {
        textAlign: 'center'
      },
    });
  }

  @computed get schedulesList () {
    const colors = this.settings.dark ? dark : light;
    const {
      ITEM_HEIGHT,
      SEPARATOR_HEIGHT,
    } = schedules;

    return StyleSheet.create({
      list: {
        flex: 1,
        backgroundColor: colors.bg
      },
      contentContainer: {
        flexGrow: 1,
        // marginTop: 1,
        backgroundColor: colors.bg
      },
      separator: {
        height: SEPARATOR_HEIGHT
      },
      empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
      },
      emptyTitle: {
        fontSize: 25,
        color: colors.light_gray_3,
        textAlign: 'center'
      },
      header: {
        height: BANNER + 4,
        justifyContent: 'center',
        alignItems: 'center'
      },
      footer: {
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
      },
      footerText: {
        fontWeight: 'bold',
        color: colors.light_gray_3
      },
      itemContainer: {
        backgroundColor: colors.bg,
        paddingHorizontal: 16,
      },
      itemContent: {
        height: ITEM_HEIGHT,
        alignItems: 'center',
        flexDirection: 'row',
      },
      itemBody: {
        width: 250,
        alignItems: 'flex-start',
        paddingLeft: 8
      },
      itemAvatar: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
      },
      itemName: {
        fontFamily: 'sans-serif-bold',
        fontSize: 16
      },
      offlineName: {
        fontFamily: 'sans-serif-bold',
        color: colors.gray,
      },
      danger: {
        color: colors.light_red,
        fontWeight: 'bold'
      },
      nameRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start'
      },
      itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      paragraph: {
        textAlign: 'center'
      },
      muteIcon: {
        marginRight: 8
      },
      privateIcon: {
        borderRadius: 5,
        position: 'absolute',
        top: dp(17),
        right: dp(17),
      },
    });
  }

  @computed get eventsList () {
    const colors = this.settings.dark ? dark : light;
    
    const {
      ITEM_HEIGHT,
      SEPARATOR_HEIGHT,
      SECTION_HEADER_HEIGHT,
      SECTION_FOOTER_HEIGHT,
      HEADER_HEIGHT,
      FOOTER_HEIGHT
    } = events;

    return StyleSheet.create({
      contentContainer: {
        backgroundColor: colors.bg,
        // marginTop: 1,
        flexGrow: 1
      },
      list: {
        backgroundColor: colors.bg,
      },
      sectionHeader: {
        backgroundColor: colors.light_gray,
        padding: 5,
        paddingLeft: 16,
        height: SECTION_HEADER_HEIGHT,
        marginHorizontal: 8,
        borderRadius: 8
      },
      sectionHeading: {
        fontSize: 22,
        color: colors.primary
      },
      sectionSubheadingContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      sectionSubheading: {
        color: colors.gray
      },
      sectionFooter: {
        height: SECTION_FOOTER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bg,
      },
      header:{
        height: HEADER_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg,
      },
      headerText:{
        color: colors.primary,
        fontWeight: 'bold'
      },
      loadPrevHeaderContainer: {
        height: dp(32)
      },
      footerContainer: {
        height: FOOTER_HEIGHT
      },
      footerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      footerText: {
        fontWeight: 'bold',
        color: colors.light_gray_3
      },
      offlineTitle: {
        fontSize: 20,
        color: colors.gray,
      },
      empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
      },
      emptyTitle: {
        fontSize: 25,
        color: colors.light_gray_3,
        textAlign: 'center'
      },
      separator: {
        height: SEPARATOR_HEIGHT,
      },
      itemContainer: {
        height: ITEM_HEIGHT,
        backgroundColor: colors.bg,
        paddingLeft: 12,
        paddingRight: 16 
      },
      itemContent: {
        paddingTop: 4,
        flexDirection: 'row',
      },
      itemBody: {
        paddingTop: 4,
        paddingLeft: 8,
        flex: 1,
      },
      itemHeadline: {
        fontSize: 18,
      },
      itemNote: {
        fontSize: 16,
        color: colors.gray,
      },
      left: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
      },
      cancelled: {
        fontSize: 16,
        color: colors.light_red
      },
      time: {
        fontSize: 14,
        color: colors.gray
      },
      status: {
        color: colors.gray,
      },
      duration: {
        fontFamily: 'sans-serif-bold',
        color: colors.gray,
      },
      durationRow: {
        flexDirection: 'row'
      },
      paragraph: {
        textAlign: 'center'
      },
      privateIcon: {
        borderRadius: 5,
        position: 'absolute',
        top: 17,
        right: 17,
      },
    });
  }

  @computed get moreList () {
    const colors = this.settings.dark ? dark : light;
    const {
      SEPARATOR_HEIGHT,
      HEADER_HEIGHT
    } = more_list;

    return StyleSheet.create({
      container: {
        backgroundColor: colors.bg
      },
      contentContainer: {
        flexGrow: 1,
        backgroundColor: colors.bg
      },
      header: {
        height: HEADER_HEIGHT,
        backgroundColor: colors.bg,
        marginBottom: 8,
      },
      separator: {
        height: SEPARATOR_HEIGHT,
      },
      footer: {
        backgroundColor: colors.bg,
        marginVertical: 8,
      },
      item: {
        backgroundColor: colors.bg,
      }
    });
  }

  @computed get actionsheet () {
    const colors = this.settings.dark ? dark : light;

    const hairlineWidth = StyleSheet.hairlineWidth;

    return StyleSheet.create({
      overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0.4,
        backgroundColor: '#000'
      },
      wrapper: {
        flex: 1,
        flexDirection: 'row'
      },
      body: {
        flex: 1,
        alignSelf: 'flex-end',
        backgroundColor: colors.actionsheet
      },
      titleBox: {
        height: dp(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg
      },
      titleText: {
        color: colors.actionsheetTitleText,
        fontSize: 14
      },
      messageBox: {
        height: dp(30),
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg
      },
      messageText: {
        color: '#9a9a9a',
        fontSize: 12
      },
      buttonBox: {
        height: dp(50),
        marginTop: hairlineWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg
      },
      buttonText: {
        fontSize: 18
      },
      cancelButtonBox: {
        height: dp(50),
        marginTop: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg
      }
    })
  }

  @computed get styles () {
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        flex: 1,
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minWidth: 48,
        maxWidth: 48
      },
      iconButton: {
        marginRight: 0
      },
      badge: {
        color: colors.gray
      },
      header: {
        elevation: 0,
        backgroundColor: colors.bg,
      },
      header: {
        elevation: 0,
        backgroundColor: colors.bg,
      },
      headerColor: {
        color: colors.gray
      },
      bg: {
        backgroundColor: colors.bg
      }
    });    
  }

  @computed get profile() {
    
    const colors = this.settings.dark ? dark : light;

    return StyleSheet.create({
      container: {
        backgroundColor: colors.bg,
        padding: 24,
        flex: 1
      },
      header: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      textLabel: {
        fontSize: 13,
        marginVertical: 4,
        fontWeight: 'bold'
      },
      value: {
        fontSize: 16,
        color: colors.black
      },
      headline: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif-bold',
        textAlign: 'center',
        padding: 12
      },
      count: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 25,
      },
      label: {
        color: colors.black,
        fontSize: 16,
      },
      linkLabel: {
        textAlign: 'center',
        color: colors.black,
        fontSize: 16,
      },
      countRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.light_gray,
        padding: 16,
        borderRadius: 8
      },
      item: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      link: {
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      linkStyle: {
        color: colors.link,
      },
      linkIcon: {
        paddingRight: 8
      },
      body: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 16
      },
      fab:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 16
      }
    })
  }
}