let momentLocale;
export default (lang) => {
  switch(lang) {
    case 'en': case 'en-GB':
      return require('./en').default;
    case 'fr':
      momentLocale = require('moment/locale/fr');
      return require('./en').default;
    default:
      return require('./en').default;
  }
};