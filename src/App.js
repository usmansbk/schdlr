import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import {
  AuthLoading,
  Login,
  NewEvent,
  NewBoard,
  Home,
  EventDetails,
  Board,
  BoardInfo,
  Help,
  Settings,
  UserProfile,
  UserBoards,
  Followers,
  Comments,
  EditEvent,
  EditBoard,
  SearchScreen,
  BoardEvents,
  WebView
} from 'components/screens';
import colors from 'config/colors';

/**
 * I don't know why setting common navigationOptions to null headers
 * doesn't work as expected. (x_x)
 */
const AppStack = createStackNavigator({
  Home,
  EditEvent: {
    screen: EditEvent,
    navigationOptions: {
      header: null
    }
  },
  EditBoard: {
    screen: EditBoard,
    navigationOptions: {
      header: null
    }
  },
  NewEvent: {
    screen: NewEvent,
    navigationOptions: {
      header: null
    }
  },
  NewBoard: {
    screen: NewBoard,
    navigationOptions: {
      header: null
    }
  },
  EventDetails: {
    screen: EventDetails,
    navigationOptions: {
      header: null
    }
  },
  Board: {
    screen: Board,
    navigationOptions: {
      header: null
    }
  },
  BoardEvents: {
    screen: BoardEvents,
    navigationOptions: {
      header: null
    }
  },
  BoardInfo: {
    screen: BoardInfo,
    navigationOptions: {
      header: null
    }
  },
  Help: {
    screen: Help,
    navigationOptions: {
      header: null
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null
    }
  },
  UserProfile: {
    screen: UserProfile,
  },
  UserBoards: {
    screen: UserBoards,
  },
  Comments: {
    screen: Comments,
    navigationOptions: {
      header: null
    }
  },
  Followers: {
    screen: Followers,
    navigationOptions: {
      header: null
    }
  },
  SearchScreen: {
    screen: SearchScreen,
  },
  WebView: {
    screen: WebView,
    navigationOptions: {
      header: null
    }
  },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0
    },
    headerTitleStyle: { color: colors.white },
    headerTintColor: colors.white,
    headerTransparent: true,
  }
});

const AuthStack = createStackNavigator({
  Login,
}, {
  headerMode: 'none'
});

const AppNavigator = createSwitchNavigator({
  AuthLoading,
  App: AppStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading',
});

export default createAppContainer(AppNavigator);