import { capitalize } from 'lib/utils';

const DATE_FORMAT = 'MMMM DD, YYYY';
const DAY_FORMAT = 'dddd';
const NEXT_LAST_FORMAT = 'dddd, Do';
const CAL_TIME_FORMAT = 'DD MMM YYYY hh:mm';

export default {
  APP_welcome: 'Bienvenue chez Schdlr!',
  APP_caption: `Le planificateur d'événements`,
  APP_footerCaption: 'Partagez vos horaires!',

  ACTION_filterByType: filter => "Filtrer par type: " + capitalize(filter),
  ACTION_all: "Afficher tout",
  ACTION_events: "Événements",
  ACTION_schedules: "Des horaires",
  ACTION_bookmarks: "Signets",
  ACTION_followers: "Planifier les abonnés",
  ACTION_comments: "commentaires",
  ACTION_clearAll: "Tout effacer",

  COMMENTS: 'Commentaires',
  COMMENTS_emptyList: "Sans commentaires",
  COMMENTS_loadMore: "Charger plus de commentaires",
  COMMENTS_noMoreComments: "Pas d'autres commentaires",
  COMMENT_tooLong: "Commentaire trop long",

  Followers: "Planifier les abonnés",
  FOLLOWERS_emptyList: "Aucun abonné",
  FOLLOWERS_loadMore: "Charger plus",

  EVENTS_emptyList: "Aucun événement à venir",
  EVENTS_SECTIONLIST_after: date => `Après le ${date}`,
  EVENTS_SECTIONLIST_noMoreEvents: () => "Plus d'événements",
  EVENTS_SECTIONLIST_before: date => `Avant le ${date}`,
  EVENTS_SECTIONLIST_noPrevEvents: () => "No previous events",
  EVENTS_SECTION_FOOTER: "Aucun événement à venir",
  EVENTS_SECTION_ITEM_COUNT: count => count ? `${count} événements` : '',
  
  BOARD_emptyList: "Votre tableau est vide",
  BOARD_emptyListCaption: "Suivez ou créez un calendrier",

  PROFILE_boardEmptyList: "Pas d'horaires",
  PROFILE_followingLabel: "Horaires suivants",
  PROFILE_createdLabel: "Créé",
  PROFILE_notVisibleToPublic: "Événements non visibles par le public",

  BOOKMARKS_emptyList: "Vous n'avez encore enregistré aucun événement",
  BOOKMARKS_COUNT: count => `signet${count > 1 ? 's' : ''}`,
  BOOKMARKS_BY_emptyList: "Pas encore de signets",
  BOOKMARKED_BY: "Marqué par",

  MORE_settings: "Réglages",
  MORE_inviteAFriend: "Dire à un ami",
  MORE_help: "Aidez-moi",
  MORE_signOut: "Déconnexion",
  MORE_sync: "Sync",
  MORE_importCalendar: "Importer le calendrier",

  DISCOVER_emptyList: "Découvrir",
  DISCOVER_turnOnLocation: "Utilisez votre position",
  DISCOVER_locationUsage: "Schdlr a besoin de votre emplacement pour trouver des événements à proximité.",
  DISCOVER_emptyListCaption: "Des événements qui se passent autour de vous!",

  SEARCH_inputPlaceholder: city => `Rechercher${city ? (' ' + city) : ' Schdlr'}`,
  SEARCH_schedulesTabLabel: "Des horaires",
  SEARCH_eventsTabLabel: "Événements",
  SEARCH_peopleTabLabel: "Gens",
  SEARCH_emptyList: "Aucun résultat",
  SEARCH_loadMore: "Charger plus",
  SEARCH_noMoreResults: "Plus de résultats",
  SEARCH_search: "Rechercher Schdlr",

  NOTIFICATIONS_updatesTabLabel: "MISES À JOUR",
  NOTIFICATIONS_messagesTabLabel: "COMMENTAIRES",
  NOTIFICATIONS_emptyUpdatesList: "Restez à l'écoute!",
  NOTIFICATIONS_emptyUpdatesListCaption: "Des mises à jour et annonces importantes apparaîtront ici",
  NOTIFICATIONS_emptyMessagesList: "Aucun commentaire pour l'instant",
  NOTIFICATIONS_allCaughtUp: "Vous êtes tous rattrapés",
  NOTIFICATIONS_title: filter => {
    if (filter === 'all') return 'Notifications';
    return `Notifications - ${capitalize(filter)}s`;
  },

  SETTINGS_screenTitle: "Réglages",
  SETTINGS_generalSectionTitle: "réglages généraux",
  SETTINGS_commentSectionTitle: "Commentaires",
  SETTINGS_sound: "Du son",
  SETTINGS_vibrate: "Vibrer",
  SETTINGS_darkTheme: "Thème sombre",
  SETTINGS_location: "Emplacement",
  SETTINGS_reminderSectionTitle: "Rappel",
  SETTINGS_disableReminders: "Désactiver tous les événements",
  SETTINGS_remindMe: "Rappelle moi",
  SETTINGS_pushSectionTitle: "Notification push",
  SETTINGS_disablePush: "Désactiver la notification push",
  SETTINGS_disableComments: "Désactiver les commentaires",
  SETTINGS_disableAdminComment: "Disable admin comments",
  SETTINGS_enableMembersComment: "Enable members comments",
  SETTINGS_disableReplies: "Disable replies",

  REMIND_ME_title: "Rappelle moi",
  REMIND_ME_five: "5 minutes avant",
  REMIND_ME_ten: "10 minutes avant",
  REMIND_ME_fifteen: "15 minutes avant",
  REMIND_ME_thirty: "30 minutes avant",
  REMIND_ME_oneHour: "1 heure avant",
  REMIND_ME_oneDay: "1 jour avant",

  MODAL_done: "Terminé",
  MODAL_continue: "CONTINUER",
  MODAL_dismiss: "REJETER",

  SIGN_OUT_title: "Déconnexion?",
  SIGN_OUT_message: "Effacera les données",

  HELP_title: "Aidez-moi",
  HELP_contactUs: "Contacter le développeur",
  HELP_contactUsSubtitle: "Des questions? Besoin d'aide",
  HELP_copyRight: "Informations sur le droit d'auteur",
  HELP_terms: "Conditions d'utilisation",
  HELP_appVersion: "Version de l'application",
  HELP_build: "Version de construction",
  HELP_privacy: "Politique de confidentialité",

  BUTTON_import: "Importer un calendrier",
  BUTTON_cancel: "Annuler",
  BUTTON_create: "Créer",
  BUTTON_save: "Enregistrer",
  BUTTON_signout: "Déconnexion",
  BUTTON_ok: "D'accord",
  BUTTON_help: "AIDEZ-MOI",
  BUTTON_dontShowAgain: "Ne plus montrer",
  BUTTON_askMeLater: "Demande moi plus tard",
  BUTTON_yes: "Oui",
  BUTTON_no: "Non",
  BUTTON_dismiss: "Rejeter",
  BUTTON_continue: "Continuer",
  BUTTON_done: "Terminé",
  BUTTON_next: "Prochain",
  BUTTON_skip: "Passer",
  BUTTON_back: "Retourner",
  BUTTON_loading: "Chargement...",
  BUTTON_tryAgain: "Réessayer",
  BUTTON_addMyCalendar: "Ajouter mon calendrier",
  BUTTON_continueWithEmail: "Continuer avec l'email",
  BUTTON_continueWithGoogle: "Continuez avec Google",
  BUTTON_continueWithFacebook: "Continuez avec Facebook",
  BUTTON_loggingIn: "Se connecter...",
  BUTTON_signingIn: "Connectez-vous...",
  BUTTON_editProfile: "Modifier les détails",
  BUTTON_shareVia: "Partage via",
  BUTTON_shareInviteLink: "Partager le lien d'invitation",
  BUTTON_removeBookmark: "Supprimer le signet",
  BUTTON_bookmark: "Signet",
  BUTTON_mute: "Rappel muet",
  BUTTON_muteEvents: "Rappel muet",
  BUTTON_unmute: "Réactiver le son",
  BUTTON_unmuteEvents: "Réactiver le rappel",
  BUTTON_unfollow: "Se désabonner",
  BUTTON_sync: "Sync",
  BUTTON_turnOnLocation: "Allumer",

  ALERT_repeat: "Répéter",
  ALERT_duration: "Durée",
  ALERT_tooShort: "Trop court",
  ALERT_until: "Jusqu'à la date",
  ALERT_cantRepeat: "L'événement devrait se terminer dans une date future",
  ALERT_invalidStart: "La date de fin doit être supérieure à la date de début",
  ALERT_durationTooShort: "L'événement doit durer au moins cinq minutes",
  ALERT_shortUntil: "L'événement doit se produire au moins deux fois avant la date finale",
  ALERT_whatIsASchedule: "Qu'est-ce qu'un horaire?",
  ALERT_whatIsAScheduleA: schdl => `Un horaire est un groupe d'événements, comme un horaire de cours. ${schdl ? `Les "${schdl.name}"` : ""} seront informés de cet événement.`,
  ALERT_whatIsAScheduleA2: "Un calendrier est un groupe d'événements. Ajoutez des événements ici et les personnes qui suivent ce calendrier seront informées de vos événements.",
  ALERT_privateSchedule: "Horaire privé",
  ALERT_privateScheduleA: "Les événements créés après avoir défini le calendrier sur «Privé» ne sont pas visibles par tout le monde.",
  ALERT_privateScheduleWarn: "Les événements futurs de ce calendrier ne seront pas visibles au public.",
  ALERT_publicScheduleA: "Les événements créés après avoir défini le calendrier sur «Public» sont visibles par tous.",
  ALERT_permissionLocationTitle: "Autorisation de localisation",
  ALERT_permissionLocationMessage: "Schdlr a besoin d'accéder à votre emplacement pour une meilleure expérience.",
  ALERT_deleteType: "Supprimer le type d'événement?",
  ALERT_deleteImage: "Supprimer l'image?",
  ALERT_unfollow: name => `Se désabonner de  ${name}?`,
  ALERT_unfollowMessage: `Leurs événements n'apparaîtront plus dans votre calendrier.`,
  ALERT_clearNotifications: 'Des notifications claires?',
  ALERT_clearNotificationsMessage: 'Effacera toutes les notifications.',

  SHARE_inviteAFriendTitle: "Invitez via ...",
  SHARE_SCHEDULE_inviteTitle: "Partager le lien d'invitation via ...",
  SHARE_SCHEDULE_subject: "Vous avez été invité à suivre un programme sur Schdlr.",
  SHARE_SCHEDULE_message: name => `Hello, I'm inviting you to follow "${name}" to see their latest events, receive updates and reminders.\n`,
  SHARE_EVENT_inviteTitle: "Partager l'événement via ...",
  SHARE_appMessage: `Salut! Je vous invite à utiliser Schdlr!
  Avec Schdlr, vous pouvez facilement partager des événements avec les communautés, que ce soit en famille, au travail ou à l'école.
  Téléchargez Schdlr ici:`,
  SHARE_appTitle: 'Invite un ami',
  SHARE_appSubject: "Voir les événements qui se produisent près de chez vous",

  TOAST_eventAdded: "Événement publié",
  TOAST_enableReminder: "Réactivez tous les événements pour continuer!",
  TOAST_updatesAvailable: "Mises à jour disponibles. Actualiser le calendrier",
  TOAST_locationError: "Impossible d'obtenir l'emplacement. Désactivez le mode avion.",
  TOAST_noImageFound: "Aucune image trouvée",
  TOAST_removed: "Signet supprimé",
  TOAST_saved: "Événement marqué d'un signet",
  TOAST_fetchingUpdates: "Récupération des mises à jour ...",
  TOAST_newNotifications: count => `${count} nouvelle${count > 1 ? 's' : ''} notification${count > 1 ? 's' : ''}`,
  TOAST_justAmoment: "Appliquer le thème ... Juste un instant",
  TOAST_downloading: "Téléchargement...",
  TOAST_downloadFailed: "Échec du téléchargement",
  TOAST_fileTooLarge: name => `"${name.slice(0, 20)}..." est plus grand que 8 Mo`,

  PROFILE_FORM_name: "Nom",
  PROFILE_FORM_website: "Site Internet",
  PROFILE_FORM_bio: "Bio",
  PROFILE_joined: date => `Inscrit en ${date}`,

  VENUE: "LIEU",
  REPEAT: "RÉPÉTER",
  CREATED: "CRÉÉ",
  UNTIL: "JUSQU'À",
  STARTED: "COMMENCÉ",
  AUTHOR: "PROPRIÉTAIRE",
  EDITED: "ÉDITÉ",
  DESCRIPTION: "LA DESCRIPTION",
  EVENT_noLocationSet: "Aucun emplacement défini",
  EVENT_noDescription: "Pas de description",
  EVENT_FORM_title: "Titre",
  EVENT_FORM_description: "La description",
  EVENT_FORM_venue: "Lieu",
  EVENT_FORM_category: "TYPE D'ÉVÉNEMENT",
  EVENT_FORM_from: "HEURE DE DÉBUT",
  EVENT_FORM_to: "HEURE DE FIN",
  EVENT_FORM_allDay: "ÉVÉNEMENT D'UNE JOURNÉE",
  EVENT_FORM_repetition: "RÉCURRENCE",
  EVENT_FORM_public: "Évennement publique",
  EVENT_FORM_schedule: "PROGRAMME",
  EVENT_FORM_repeat: "RÉPÉTER",
  EVENT_FORM_repeatForever: "RÉPÉTER POUR TOUJOURS",
  EVENT_FORM_repeatUntil: "RÉPÈTE JUSQU'À",
  EVENT_FORM_selectASchedule: "Sélectionnez un horaire",
  EVENT_FORM_noSchedule: "Pas d'horaire",
  EVENT_FORM_addToASchedule: "Ajouter à un calendrier",

  EVENT_ITEM_allDay: "Toute la journée",
  EVENT_CAPTION_allDay: ({ type, recurrence }) => {
    return `${recurrence} - ${type}`;
  },
  EVENT_CAPTION_xthDayOfType: ({ type, totalDayCount, currentDayCount }) => {
    return `${type ? type + ' day' : 'Jour'} ${currentDayCount} / ${totalDayCount}`;
  },
  EVENT_CAPTION_xDurationRecurrenceType: ({ duration, recurrence, type }) => {
    return `${duration}${recurrence ? ` ${recurrence} - ` : ''}${type ? ` ${type}` : '' }`;
  },

  SCHEDULE: "PROGRAMME",
  SCHEDULE_public: "Horaire public",
  SCHEDULE_private: "Horaire privé",
  SCHEDULE_FORM_name: "Titre de l'annexe",
  SCHEDULE_FORM_description: "La description",
  SCHEDULE_FORM_private: "Horaire privé",
  SCHEDULE_FORM_public: "Horaire public",
  SCHEDULE_FORM_selectTopic: "Choisissez un sujet",

  SCHEDULE_followerCount: "Suiveuses",
  SCHEDULE_followerCounts: "Suiveuses",
  SCHEDULE_eventsCount: "un événement",
  SCHEDULE_eventsCounts: "Événements",
  SCHEDULE_thisScheduleIsClosed: "Ce planning est archivé",
  SCHEDULE_createdOn: "Créé sur",
  SCHEDULE_by: "Créé par",
  SCHEDULE_whatIsASchedule: "Qu'est-ce qu'un horaire?",
  
  SCHEDULES_noUpcomingEvents: "Aucun événement à venir",
  SCHEDULES_loadPastEvents: count => `charger (${count}) événement${count > 1 ? 's' : ''} passé`,
  SCHEDULES_noMoreEvents: "Plus d'événements",

  HELPER_TEXT_titleIsRequired: "Le titre est requis",
  HELPER_TEXT_nameIsRequired: "Le nom est requis",
  HELPER_TEXT_tooShort: "Trop court",
  HELPER_TEXT_tooLong: "Trop long",
  HELPER_TEXT_recommended: "conseillé",
  HELPER_TEXT_required: "Obligatoire",
  HELPER_TEXT_invalidDatesAndRecur: "La durée de l'événement doit être plus courte que la fréquence de répétition",
  HELPER_TEXT_description: "Trop long",
  HELPER_TEXT_website: "Texte invalide",
  HELPER_TEXT_location: "Votre position nous aide à améliorer votre expérience avec de meilleurs résultats de recherche.",

  MENU_edit: "Edit",
  MENU_close: "Close",
  MENU_open: "Open",
  MENU_delete: "Delete",

  RECUR_never: "Événement unique",
  RECUR_daily: "du quotidien",
  RECUR_weekly: day => `Hebdomadaire (tous les ${day})`,
  RECUR_weekdays: "En semaine (du lundi au vendredi)",
  RECUR_monthly: "Mensuel (le même jour)",
  RECUR_yearly: date => `Annuel (chaque  ${date})`,

  STATUS_concluded: "Fin",
  STATUS_ongoing: "En cours",
  STATUS_done: "Terminé",
  STATUS_cancelled: "Annulé",
  STATUS_upcoming: "A venir",
  STATUS_closed: "Archivé",
  All: 'Afficher tout',

  ERROR_serverError: message => "Erreur du serveur" + (message ? ': ' + message : ''),
  ERROR_noConnection: "Pas de connection",
  ERROR_404: "Pas trouvé",
  ERROR_404_caption: "L'élément a peut-être été supprimé",
  ERROR_offline: "Vous n'êtes pas connecté!",
  ERROR_somethingWentWrong: "Quelque chose a mal tourné! Réessayer",
  ERROR_failedToGetLocation: "Impossible d'accéder à votre position. Vérifiez votre réseau mobile et votre GPS",
  ERROR_failedToRemoveImage: "Impossible de supprimer l'image",
  ERROR_failedToUploadImage: "Impossible de télécharger l'image",
  ERROR_failedToApplyTheme: "Échec de l'application du thème",
  ERROR_navigationError: "Erreur de navigation",
  ERROR_failedToCreateEvent: title => `Impossible de publier l'événement: ${title}.`,
  ERROR_failedToCreateSchedule: name => `Échec de l'enregistrement de la planification: ${name}.`,
  ERROR_failedToCreateComment: content => `Échec de la remise du commentaire: ${content}.`,
  ERROR_failedToSendFiles: count => `Failed to send ${count} file${count > 1 ? 's' : ''}`,
  ERROR_failedToCreateBookmark: `Échec de la mise en signet de l'événement.`,
  ERROR_failedToCreateFollow: 'Impossible de suivre le calendrier.',
  ERROR_failedToDeleteEvent: `Impossible de supprimer l'événement.`,
  ERROR_failedToDeleteSchedule: 'Impossible de supprimer la planification.',
  ERROR_failedToDeleteComment: 'Impossible de supprimer le commentaire.',
  ERROR_failedToDeleteBookmark: 'Impossible de supprimer le signet.',
  ERROR_failedToDeleteFollow: 'Impossible de ne pas suivre le calendrier.',
  ERROR_fatal: `Une erreur fatale s'est produite.`,
  ERROR_configHint: ' Synchronisez maintenant et réessayez.',
  ERROR_signInFailure: 'Échec de la connexion',

  Event: "Événement normal",
  PLACEHOLDER_aboutThisEvent: "À propos de cet événement ...",
  PLACEHOLDER_normal: "Événement normal",
  PLACEHOLDER_addYourWebsite: "Ajoutez votre site web",
  PLACEHOLDER_bio: "À propos de moi",
  PLACEHOLDER_venue: city => {
    if (city) {
      return `À ${city}`;
    }
    return "Sur place";
  },
  PLACEHOLDER_customType: "Ajouter un type personnalisé",
  PLACEHOLDER_searchCities: "Rechercher des villes",

  WARNING_dontMissOut: "Ne ratez rien!",
  WARNING_fileTooLarge: "Le fichier est trop grand",

  DIALOG_cancelEvent: "Annuler l'événement?",
  DIALOG_onlyThisEvent: "Uniquement cet événement?",
  DIALOG_allOfThisEvent: "Tout cet événement",
  DIALOG_closeSchedule: "Archiver ce calendrier?",
  DIALOG_closeScheduleWarning: "Vous n'ajouterez pas d'événements futurs.",
  DIALOG_deleteComment: "Supprimer ce commentaire?",
  DIALOG_deleteEvent: "Supprimer cet événement?",
  DIALOG_deleteEventWarning: "Annulez toujours les événements avant de les supprimer pour informer vos abonnés.",
  DIALOG_deleteSchedule: "Supprimer cet horaire?",
  DIALOG_deleteScheduleWarning: "L'action supprimera tous les événements associés!",
  DIALOG_openSchedule: "Désarchiver ce calendrier?",

  SNACKBAR_sync: "Sync",
  SNACKBAR_seeUpdates: "Voir les mises à jour", 

  REQUEST_LOCATION_TITLE: 'Autorisation de localisation Schdlr',
  REQUEST_LOCATION_MESSAGE: "L'application Schdlr a besoin d'accéder à votre position pour que les événements soient plus faciles à trouver.",

  PICKER_location: "Emplacement",
  SYNC_message: "Supprime tous les événements supprimés et expirés et corrige les événements et les horaires manquants.",
  SYNC_complete: "Synchronisé",

  TEXT_addImagesToAlbum: "Album photo vide",
  TEXT_noAlbum: "Album photo vide",
  TEXT_noBanner: "Aucune bannière d'événement",
  TEXT_album: "Album",

  MOMENT_left: from => `${from} restantes`,
  Today: `Aujourd'hui`,

  calendarFormats: {
    sameDay: "[Aujourd'hui], ddd Do",
    nextDay: '[Demain], ddd Do',
    nextWeek: 'dddd, Do',
    lastDay: '[Hier], ddd Do',
    lastWeek: 'dddd [dernier], Do',
    sameElse: 'ddd, Do MMM YYYY',
  },

  headingCalendarFormats : {
    sameDay: `[Aujourd'hui]`,
    nextDay: '[Demain]',
    nextWeek: DAY_FORMAT,
    lastDay: '[Hier]',
    lastWeek: 'dddd [dernier]',
    sameElse: DATE_FORMAT
  },
  calendarTimeFormats : {
    sameDay: "[aujourd'hui] [à] HH:mm",
    nextDay: '[Demain]',
    nextWeek: DAY_FORMAT,
    lastDay: '[hier] [à] hh:mm',
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
    'Conférence',
    'Compétition',
    'Examen',
    'Festival',
    'Se rencontrer',
    'Réunion',
    'Fête',
    'Se rallier',
    'Tour',
    'Tournoi'
  ],
  topics: [
    "Affaires et professionnels",
    "Charité et causes",
    "Communauté et culture",
    "Éducation",
    "Fashion beauté",
    "Cinéma, médias et divertissement",
    "Nourriture boisson",
    "Gouvernement et politique",
    "Santé et bien-être",
    "Loisirs et intérêts spéciaux",
    "Mode de vie familial",
    "La musique",
    "Religion et spiritualité",
    "Activités scolaires",
    "Technologie scientifique",
    "Saisonnier et vacances",
    "Sports et fitness",
    "Voyage et plein air"
  ],
  personalSchedule: {
    name: "Liste personnelle 📝",
    description: "Mes rendez-vous.",
    isPublic: false
  },
  timeLabels: {
    d: 'Journées',
    h: 'Heures',
    m: 'Min',
    s: 'Seconde'
  },
  daily: 'du quotidien',
  weekly: 'hebdomadaire',
  weekdays: 'jours de la semaine',
  monthly: 'mensuelle',
  yearly: 'annuelle',
  walkthrough : [
    {
      key: 'p1',
      title: 'Schdlr',
      text: "Schdlr est un planificateur d'événements sociaux",
      image: require('../assets/student.png'),
      backgroundColor: '#22bcb5',
    },
    {
      key: 'p2',
      title: 'Créez des horaires facilement!',
      text: 'Entrez un nom de programme et votre programme est prêt à être utilisé et partagé.',
      image: require('../assets/list-app.png'),
      backgroundColor: '#63a4ff',
    },
    {
      key: 'p3',
      title: 'Ajoutez des événements à vos horaires!',
      text: 'Organisez vos événements en les regroupant dans des horaires spécifiques.',
      image: require('../assets/calendar.png'),
      backgroundColor: '#00897b',
    },
    {
      key: 'p4',
      title: 'Gardez tout le monde à jour!',
      text: 'Créez des horaires pour les événements de votre vie et invitez les gens à les suivre et à les partager.',
      image: require('../assets/handshake.png'),
      backgroundColor: '#ab47bc',
    },
    {
      key: 'p5',
      title: "Suivez les horaires qui vous intéressent!",
      text: 'Suivez les horaires et obtenez leurs événements des rappels hors ligne et des mises à jour en temps réel.',
      image: require('../assets/app-user.png'),
      backgroundColor: '#673ab7',
    },
    {
      key: 'p6',
      title: "Bienvenue chez Schdlr!",
      text: 'Schdlr vous aide à organiser vos événements, en créant des horaires pour tenir tout le monde à jour.',
      image: require('../assets/schoolbooks.png'),
      backgroundColor: '#22bcb5',
    },
  ],
};