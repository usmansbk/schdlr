import { capitalize } from 'lib/utils';

const DATE_FORMAT = 'MMMM DD, YYYY';
const DAY_FORMAT = 'dddd';
const NEXT_LAST_FORMAT = 'dddd, Do';
const CAL_TIME_FORMAT = 'DD MMM YYYY hh:mm';

export default {
  APP_welcome: 'Welcome to Schdlr!',
  APP_caption: 'The event scheduler',
  APP_footerCaption: 'Share your schedules!',

  ACTION_filterByType: filter => "Filter By Type: " + capitalize(filter),
  ACTION_all: "All",
  ACTION_events: "Events",
  ACTION_schedules: "Schedules",
  ACTION_bookmarks: "Bookmarks",
  ACTION_followers: "Followers",
  ACTION_comments: "Comments",
  ACTION_clearAll: "Clear all",

  COMMENTS: 'Comments',
  COMMENTS_emptyList: "No comments",
  COMMENTS_loadMore: (count) => `View ${count} more comment${count > 1 ? 's' : ''}`,
  COMMENTS_noMoreComments: "No more comments",
  COMMENT_tooLong: "Comment too long",

  FOLLOWERS_emptyList: "No followers",
  FOLLOWERS_loadMore: "Load more",

  EVENTS_emptyList: "No upcoming events",
  EVENT_noLocationSet: "No location set",
  EVENT_creating: "Creating event...",
  EVENT_updating: "Updating event...",
  EVENT_cancelling: "Cancelling event...",
  EVENT_noDescription: "No description",
  EVENTS_SECTIONLIST_after: date => `After ${date}`,
  EVENTS_SECTIONLIST_noMoreEvents: () => "No more events",
  EVENTS_SECTIONLIST_before: date => `Before ${date}`,
  EVENTS_SECTIONLIST_noPrevEvents: () => "No previous events",
  EVENTS_SECTION_FOOTER: "No upcoming events",
  EVENTS_SECTION_ITEM_COUNT: count => count ? `${count} events` : '',
  
  BOARD_emptyList: "Your board is empty",
  BOARD_emptyListCaption: "Follow or create a schedule",

  PROFILE_boardEmptyList: "Nothing here yet...",
  PROFILE_followingLabel: "Following",
  PROFILE_createdLabel: "Created",
  PROFILE_notVisibleToPublic: "Events not visible to public",

  BOOKMARKS_emptyList: "You haven't saved any events yet",
  BOOKMARKS_COUNT: count => `bookmark${count > 1 ? 's' : ''}`,
  BOOKMARKS_BY_emptyList: "No bookmarks yet",
  BOOKMARKED_BY: "Bookmarked by",

  MORE_settings: "Settings",
  MORE_inviteAFriend: "Tell A Friend",
  MORE_help: "Help",
  MORE_signOut: "Sign out",
  MORE_sync: "Sync",
  MORE_importCalendar: "Import Calendar",

  DISCOVER_emptyList: "Discover",
  DISCOVER_turnOnLocation: "Use your location",
  DISCOVER_locationUsage: "Schdlr requires your location to find nearby events.",
  DISCOVER_emptyListCaption: "Events happening around you!",

  SEARCH_inputPlaceholder: city => `Search${city ? (' ' + city) : ' Schdlr'}`,
  SEARCH_schedulesTabLabel: "Schedules",
  SEARCH_eventsTabLabel: "Events",
  SEARCH_peopleTabLabel: "People",
  SEARCH_emptyList: "No results",
  SEARCH_loadMore: "Load more",
  SEARCH_noMoreResults: "No more results",
  SEARCH_search: "Search Schdlr",

  NOTIFICATIONS_updatesTabLabel: "UPDATES",
  NOTIFICATIONS_messagesTabLabel: "COMMENTS",
  NOTIFICATIONS_emptyUpdatesList: "Stay tuned!",
  NOTIFICATIONS_emptyUpdatesListCaption: "Important updates and announcements will appear here",
  NOTIFICATIONS_emptyMessagesList: "No comments",
  NOTIFICATIONS_allCaughtUp: "You are all caught up!",
  NOTIFICATIONS_title: filter => {
    if (filter === 'all') return 'Notifications';
    return `Notifications - ${capitalize(filter)}s`;
  },

  SETTINGS_screenTitle: "Settings",
  SETTINGS_generalSectionTitle: "General",
  SETTINGS_commentSectionTitle: "Comments",
  SETTINGS_sound: "Sound",
  SETTINGS_vibrate: "Vibrate",
  SETTINGS_dark: "Dark Theme",
  SETTINGS_location: "Location",
  SETTINGS_reminderSectionTitle: "Reminder",
  SETTINGS_disableReminders: "Mute all events",
  SETTINGS_remindMe: "Remind me",
  SETTINGS_pushSectionTitle: "Push notification",
  SETTINGS_disablePush: "Disable",
  SETTINGS_disableComments: "Disable comments",
  SETTINGS_disableAdminComment: "Disable admin comments",
  SETTINGS_enableMembersComment: "Enable members comments",
  SETTINGS_disableReplies: "Disable replies",

  REMIND_ME_title: "Remind me",
  REMIND_ME_five: "5 minutes before",
  REMIND_ME_ten: "10 minutes before",
  REMIND_ME_fifteen: "15 minutes before",
  REMIND_ME_thirty: "30 minutes before",
  REMIND_ME_oneHour: "1 hour before",
  REMIND_ME_oneDay: "1 day before",

  MODAL_done: "Done",
  MODAL_continue: "CONTINUE",
  MODAL_dismiss: "DISMISS",

  SIGN_OUT_title: "Sign out?",
  SIGN_OUT_message: "Will clear data",

  TICKETS_emptyList: "No Tickets",

  HELP_title: "Help",
  HELP_contactUs: "Contact Developer",
  HELP_contactUsSubtitle: "Questions? Need help",
  HELP_copyRight: "Copyright Information",
  HELP_terms: "Terms of Service",
  HELP_appVersion: "App version",
  HELP_build: "Build version",
  HELP_privacy: "Privacy Policy",

  BUTTON_import: "Import",
  BUTTON_cancel: "Cancel",
  BUTTON_create: "create",
  BUTTON_save: "save",
  BUTTON_signout: "Sign out",
  BUTTON_ok: "Ok",
  BUTTON_help: "HELP",
  BUTTON_dontShowAgain: "Don't show again",
  BUTTON_askMeLater: "Ask me later",
  BUTTON_yes: "Yes",
  BUTTON_no: "No",
  BUTTON_dismiss: "Dismiss",
  BUTTON_continue: "Continue",
  BUTTON_done: "Done",
  BUTTON_next: "Next",
  BUTTON_skip: "Skip",
  BUTTON_back: "Back",
  BUTTON_loading: "Loading...",
  BUTTON_tryAgain: "Try again",
  BUTTON_addMyCalendar: "Add My Calendar",
  BUTTON_continueWithEmail: "Continue with email",
  BUTTON_continueWithGoogle: "Continue with Google",
  BUTTON_continueWithFacebook: "Continue with Facebook",
  BUTTON_loggingIn: "Logging in...",
  BUTTON_signingIn: "Signing in...",
  BUTTON_editProfile: "Edit details",
  BUTTON_shareVia: "Share via",
  BUTTON_shareInviteLink: "Share invite link",
  BUTTON_removeBookmark: "Remove bookmark",
  BUTTON_bookmark: "Bookmark",
  BUTTON_mute: "Mute Reminder",
  BUTTON_muteEvents: "Mute Reminder",
  BUTTON_unmute: "Unmute",
  BUTTON_unmuteEvents: "Unmute Reminder",
  BUTTON_unfollow: "Unfollow",
  BUTTON_sync: "Sync",
  BUTTON_turnOnLocation: "Turn on",

  ALERT_repeat: "Repeat",
  ALERT_duration: "Duration",
  ALERT_tooShort: "Too short",
  ALERT_until: "Until date",
  ALERT_whatIsASchedule: "Why create a list?",
  ALERT_whatIsAScheduleA: schdl => `A Schedule is a list of events, like a class timetable. ${schdl ? `"${schdl.name}"` : "Your schedule"} followers will be informed of this event.`,
  ALERT_whatIsAScheduleA2: "Add your events to a specific list, and people who follow the list will be informed of your events.",
  ALERT_privateSchedule: "Private List",
  ALERT_privateScheduleA: "This list of events will only be visible to those with invite link.",
  ALERT_publicScheduleA: "This list of events is visible to everyone.",
  ALERT_permissionLocationTitle: "Location Permission",
  ALERT_permissionLocationMessage: "Schdlr needs access to your location for better experience.",
  ALERT_deleteType: "Delete type?",
  ALERT_deleteImage: "Delete image?",
  ALERT_unfollow: name => `Unfollow ${name}?`,
  ALERT_unfollowMessage: 'Their events will no longer show up in your calendar.',
  ALERT_clearNotifications: 'Clear notifications?',
  ALERT_clearNotificationsMessage: 'Will clear all notifications.',

  SHARE_inviteAFriendTitle: "Invite via...",
  SHARE_SCHEDULE_inviteTitle: "Share invite link via...",
  SHARE_SCHEDULE_subject: "You have been invited to follow a schedule on Schdlr.",
  SHARE_SCHEDULE_message: name => `Hello, I'm inviting you to follow "${name}" to see their latest events, receive updates and reminders.\n`,
  SHARE_EVENT_inviteTitle: "Share event via...",
  SHARE_appMessage: `Hi! I'm inviting you to use Schdlr!\n\nWith Schdlr you can easily share events with communities, be it family, work or school.\n\nDownload Schdlr here:`,
  SHARE_appTitle: 'Invite a friend',
  SHARE_appSubject: "See events happening near you",

  TOAST_eventAdded: "Event posted",
  TOAST_enableReminder: "Unmute all events to continue!",
  TOAST_updatesAvailable: "Updates available. Refresh calendar",
  TOAST_locationError: "Failed to get location. Turn off airplane mode.",
  TOAST_noImageFound: "No image found",
  TOAST_removed: "Bookmark removed",
  TOAST_saved: "Event bookmarked",
  TOAST_fetchingUpdates: "Fetching updates...",
  TOAST_newNotifications: count => `${count} new notification${count > 1 ? 's' : ''}`,
  TOAST_justAmoment: "Applying theme... Just a moment",
  TOAST_downloading: "Downloading...",
  TOAST_downloadFailed: "Download failed",
  TOAST_fileTooLarge: name => `"${name.slice(0, 20)}..." is larger than 8mb`,

  PROFILE_FORM_name: "Name",
  PROFILE_FORM_website: "Website",
  PROFILE_FORM_bio: "Bio",
  PROFILE_joined: date => `Joined ${date}`,

  VENUE: "VENUE",
  REPEAT: "REPEAT",
  CREATED: "CREATED",
  UNTIL: "UNTIL",
  STARTED: "STARTED",
  AUTHOR: "AUTHOR",
  EDITED: "EDITED",
  
  EVENT_FORM_title: "EVENT TITLE",
  EVENT_FORM_description: "DESCRIPTION",
  EVENT_FORM_venue: "LOCATION",
  EVENT_FORM_category: "EVENT TYPE",
  EVENT_FORM_from: "FROM",
  EVENT_FORM_to: "TO",
  EVENT_FORM_allDay: "ALL DAY",
  EVENT_FORM_repetition: "REPEAT",
  EVENT_FORM_public: "Public",
  EVENT_FORM_schedule: "LIST",
  EVENT_FORM_repeat: "REPEAT",
  EVENT_FORM_repeatForever: "REPEAT FOREVER",
  EVENT_FORM_repeatUntil: "REPEAT UNTIL",
  EVENT_FORM_selectASchedule: "Select a schedule",
  EVENT_FORM_noSchedule: "No List",
  EVENT_FORM_addToASchedule: "Add to a schedule",

  EVENT_ITEM_allDay: "All day",
  EVENT_CAPTION_allDay: ({ type, recurrence }) => {
    return `${recurrence} ${type}`;
  },
  EVENT_CAPTION_xthDayOfType: ({ type, totalDayCount, currentDayCount }) => {
    return `${type ? type + ' day' : 'Day'} ${currentDayCount} of ${totalDayCount}`;
  },
  EVENT_CAPTION_xDurationRecurrenceType: ({ duration, recurrence, type }) => {
    return `${duration}${recurrence ? ` ${recurrence}` : ''}${type ? ` ${type}` : '' }`;
  },

  SCHEDULE: "LIST",
  SCHEDULE_public: "Public List",
  SCHEDULE_private: "Private List",
  SCHEDULE_FORM_name: "List Name",
  SCHEDULE_FORM_description: "Description",
  SCHEDULE_FORM_private: "Private",
  SCHEDULE_FORM_public: "PUBLIC LIST",
  SCHEDULE_FORM_topic: "TOPIC",
  SCHEDULE_FORM_location: "LOCATION",
  SCHEDULE_FORM_selectTopic: "Select Topic",

  SCHEDULE_followerCount: "Follower",
  SCHEDULE_followerCounts: "Followers",
  SCHEDULE_eventsCount: "Event",
  SCHEDULE_eventsCounts: "Events",
  SCHEDULE_thisScheduleIsClosed: "This list is archived",
  SCHEDULE_createdOn: "Created on",
  SCHEDULE_by: "by",
  SCHEDULE_whatIsASchedule: "Why create a list?",
  
  SCHEDULES_noUpcomingEvents: "No upcoming events",
  SCHEDULES_loadPastEvents: count => `Load (${count}) past event${count > 1 ? 's' : ''}`,
  SCHEDULES_noMoreEvents: "No more events",

  HELPER_TEXT_titleIsRequired: "Title is required", HELPER_TEXT_nameIsRequired: "Name is required",
  HELPER_TEXT_tooShort: "Too short",
  HELPER_TEXT_tooLong: "Too long",
  HELPER_TEXT_recommended: "Recommended",
  HELPER_TEXT_required: "Required",
  HELPER_TEXT_invalidDatesAndRecur: "End date should be before next repeat",
  HELPER_TEXT_description: "Too long",
  HELPER_TEXT_nameIsRequired: "Name is required",
  HELPER_TEXT_website: "Invalid string",
  HELPER_TEXT_location: "Your location helps us improve your experience with better search results.",
  HELPER_TEXT_invalidEndDate: "Event should end in a future date",
  HELPER_TEXT_invalidStart: "End date should be greater than start date",
  HELPER_TEXT_durationTooShort: "Event should be at least five minutes long",
  HELPER_TEXT_shortUntil: "Event should repeat at least once",

  MENU_edit: "Edit",
  MENU_close: "Close",
  MENU_open: "Open",
  MENU_delete: "Delete",

  RECUR_never: "Never",
  RECUR_daily: "Every day",
  RECUR_weekly: day => `Every week ( ${day} )`,
  RECUR_weekdays: "Every weekday ( Mon - Fri )",
  RECUR_monthly: "Every month",
  RECUR_yearly: date => `Every year ( ${date} )`,

  STATUS_concluded: "Concluded",
  STATUS_ongoing: "Ongoing",
  STATUS_done: "Done",
  STATUS_cancelled: "Cancelled",
  STATUS_upcoming: "Upcoming",
  STATUS_closed: "Archived",

  ERROR_serverError: message => "Server Error" + (message ? ': ' + message : ''),
  ERROR_noConnection: "No connection",
  ERROR_404: "Not found",
  ERROR_404_caption: "Item may have been deleted",
  ERROR_offline: "You're currently offline!",
  ERROR_somethingWentWrong: "Something went wrong! Try Again",
  ERROR_failedToGetLocation: "Failed to access your location. Check your mobile network and GPS",
  ERROR_failedToRemoveImage: "Failed to delete image",
  ERROR_failedToUploadImage: "Failed to upload image",
  ERROR_failedToApplyTheme: "Failed to apply theme",
  ERROR_navigationError: "Navigation error",
  ERROR_failedToCreateEvent: title => `Failed to publish event: ${title}.`,
  ERROR_failedToCreateSchedule: name => `Failed to save schedule: ${name}.`,
  ERROR_failedToCreateComment: content => `Failed to deliver comment: ${content}.`,
  ERROR_failedToSendFiles: count => `Failed to send ${count} file${count > 1 ? 's' : ''}`,
  ERROR_failedToCreateBookmark: 'Failed to bookmark event.',
  ERROR_failedToCreateFollow: 'Failed to follow schedule.',
  ERROR_failedToDeleteEvent: 'Failed to delete event.',
  ERROR_failedToDeleteSchedule: 'Failed to delete schedule.',
  ERROR_failedToDeleteComment: 'Failed to delete comment.',
  ERROR_failedToDeleteBookmark: 'Failed to remove bookmark.',
  ERROR_failedToDeleteFollow: 'Failed to unfollow schedule.',
  ERROR_fatal: 'Fatal error occured.',
  ERROR_configHint: ' Sync now and try again.',
  ERROR_signInFailure: 'Failed to Sign In',

  PLACEHOLDER_aboutThisEvent: "About this event...",
  PLACEHOLDER_normal: "Normal",
  PLACEHOLDER_addYourWebsite: "Add your website",
  PLACEHOLDER_bio: "About me",
  PLACEHOLDER_venue: city => city ? `In ${city}` : "Venue",
  PLACEHOLDER_customType: "Add a custom type",
  PLACEHOLDER_searchCities: "Search cities",

  WARNING_dontMissOut: "Don't miss out!",
  WARNING_fileTooLarge: "File is too large",

  DIALOG_cancelEvent: "Cancel event?",
  DIALOG_onlyThisEvent: "Only this event?",
  DIALOG_allOfThisEvent: "All of this event",
  DIALOG_closeSchedule: "Archive this list?",
  DIALOG_closeScheduleWarning: "You won't be adding future events.",
  DIALOG_deleteComment: "Delete this comment?",
  DIALOG_deleteEvent: "Delete this event?",
  DIALOG_deleteEventWarning: "Always cancel events before deleting them to notify your followers.",
  DIALOG_deleteSchedule: "Delete this schedule?",
  DIALOG_deleteScheduleWarning: "Action will delete all related events!",
  DIALOG_openSchedule: "Unarchive this list?",

  SNACKBAR_sync: "Sync",
  SNACKBAR_seeUpdates: "See updates", 

  REQUEST_LOCATION_TITLE: 'Schdlr Location Permission',
  REQUEST_LOCATION_MESSAGE: "Schdlr App needs access to your location so events are easier to find.",

  PICKER_location: "Location",
  SYNC_message: "Will remove all deleted and expired events and fix missing events and schedules.",
  SYNC_complete: "Synchronized",

  TEXT_addImagesToAlbum: "Add Images to album",
  TEXT_noAlbum: "Photo Album",
  TEXT_noBanner: "Event Banner",
  TEXT_album: "Album",

  THEME_title: "Theme",
  THEME_auto: "Use my System Theme",
  THEME_light: "Light",
  THEME_dark: "Dark",

  MOMENT_left: from => `${from} left`,
  Today: 'Today',

  calendarFormats: {
    sameDay: '[Today], ddd Do',
    nextDay: '[Tomorrow], ddd Do',
    nextWeek: 'dddd, Do',
    lastDay: '[Yesterday], ddd Do',
    lastWeek: '[Last] dddd, Do',
    sameElse: 'ddd, Do MMM YYYY',
  },

  headingCalendarFormats : {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: DAY_FORMAT,
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: DATE_FORMAT
  },
  calendarTimeFormats : {
    sameDay: '[Today] [at] HH:mm',
    nextDay: '[Tomorrow]',
    nextWeek: DAY_FORMAT,
    lastDay: '[Yesterday] [at] hh:mm',
    lastWeek: CAL_TIME_FORMAT,
    sameElse: CAL_TIME_FORMAT 
  },
  subheadingCalendarFormats : {
    sameDay: NEXT_LAST_FORMAT,
    nextDay: NEXT_LAST_FORMAT,
    nextWeek: DATE_FORMAT,
    lastDay: NEXT_LAST_FORMAT,
    lastWeek: DATE_FORMAT,
    sameElse: DAY_FORMAT
  },
  categories : [
    'Class',
    'Lecture',
    'Conference',
    'Competition',
    'Exam',
    'Festival',
    'Funfare',
    'Meetup',
    'Meeting',
    'Party',
    'Performance',
    'Rally',
    'Tour',
    'Tournament',
    'Training',
    'Workshop',
  ],
  topics: [
    "Personal Appointments",
    "Business & Professional",
    "Charity & Causes",
    "Community & Culture",
    "Education",
    "Fashion & Beauty",
    "Film, Media & Entertainment",
    "Food & Drink",
    "Government & Politics",
    "Health and Wellness",
    "Hobbies & Special Interest",
    "Family Lifestyle",
    "Music",
    "Religion & Spirituality",
    "School Activities",
    "Science & Technology",
    "Seasonal & Holiday",
    "Sports & Fitness",
    "Travel & Outdoor"
  ],
  personalSchedule: {
    name: "Personal List 📝",
    description: "My appointments.",
    isPublic: false
  },
  timeLabels: {
    d: 'Days',
    h: 'Hours',
    m: 'Mins',
    s: 'Sec'
  },
  daily: 'daily',
  weekly: 'weekly',
  weekdays: 'weekdays',
  monthly: 'monthly',
  yearly: 'yearly',
  walkthrough : [
    {
      key: 'p1',
      title: 'Schdlr',
      text: 'Schdlr is a social event scheduler',
      image: require('../assets/student.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 'p2',
      title: 'Create schedules easily!',
      text: 'Enter a schedule name and your schedule is ready to be used and shared.',
      image: require('../assets/list-app.png'),
      backgroundColor: '#63a4ff',
    },
    {
      key: 'p3',
      title: 'Add events to your schedules!',
      text: 'Organize your events by grouping them in specific schedules.',
      image: require('../assets/calendar.png'),
      backgroundColor: '#00897b',
    },
    {
      key: 'p4',
      title: 'Keep everyone Up-to-date!',
      text: 'Create schedules for events in your life and invite people to follow and share them.',
      image: require('../assets/handshake.png'),
      backgroundColor: '#ab47bc',
    },
    {
      key: 'p5',
      title: "Follow schedules of interest!",
      text: 'Follow schedules and get their events offline reminders and real-time updates.',
      image: require('../assets/app-user.png'),
      backgroundColor: '#673ab7',
    },
    {
      key: 'p6',
      title: "Welcome to Schdlr!",
      text: 'Schdlr helps you to organize your events, by creating schedules to keep everyone up-to-date.',
      image: require('../assets/schoolbooks.png'),
      backgroundColor: '#22bcb5',
    },
  ]
};