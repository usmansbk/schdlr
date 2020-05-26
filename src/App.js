import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  AuthLoading,
  Login,
  NewEvent,
  NewSchedule,
  Home,
  EventDetails,
  Schedule,
  ScheduleInfo,
  Help,
  Settings,
  UserProfile,
  UserSchedules,
  Followers,
  Comments,
  EditEvent,
  EditSchedule,
  SearchScreen,
  ScheduleEvents,
  EmailLogin,
  EditProfile,
  AvatarViewer,
  Banner,
  SchedulePicture,
  EventBookmarks,
  Intro,
  ViewEmbed,
  Album,
  AlbumViewer,
  CalendarEvent
} from 'components/screens';
import colors from 'config/colors';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    path: '',
  },
  CalendarEvent: {
    screen: CalendarEvent,
  },
  EditEvent: {
    screen: EditEvent,
  },
  EditSchedule: {
    screen: EditSchedule,
  },
  NewEvent: {
    screen: NewEvent,
  },
  NewSchedule: {
    screen: NewSchedule,
  },
  EventDetails: {
    screen: EventDetails,
    path: 'event/:id',
  },
  Schedule: {
    screen: Schedule,
  },
  ScheduleEvents: {
    screen: ScheduleEvents,
  },
  EventBookmarks: {
    screen: EventBookmarks,
  },
  ScheduleInfo: {
    screen: ScheduleInfo,
    path: 'schdl/:id',
  },
  Help: {
    screen: Help,
  },
  Settings: {
    screen: Settings,
  },
  ViewEmbed: {
    screen: ViewEmbed,
  },
  UserProfile: {
    screen: UserProfile,
  },
  EditProfile: {
    screen: EditProfile,
  },
  UserSchedules: {
    screen: UserSchedules,
    navigationOptions: {
      headerShown: true 
    }
  },
  Comments: {
    screen: Comments,
  },
  Followers: {
    screen: Followers,
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      headerShown: true 
    }
  },
  AvatarViewer: {
    screen: AvatarViewer,
  },
  Banner: {
    screen: Banner,
  },
  SchedulePicture: {
    screen: SchedulePicture,
  },
  Album: {
    screen: Album,
  },
  AlbumViewer: {
    screen: AlbumViewer,
  },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerShown: false,
  }
});

const AuthStack = createStackNavigator({
  Login,
  EmailLogin
}, {
  headerMode: 'none',
  initialRouteName: 'Login',
});

const AppNavigator = createSwitchNavigator({
  Intro,
  AuthLoading,
  App: {
    screen: AppStack,
    path: 'app'
  },
  Auth: {
    screen: AuthStack,
    path: '',
  }
}, {
  initialRouteName: 'AuthLoading',
});

export default createAppContainer(AppNavigator);