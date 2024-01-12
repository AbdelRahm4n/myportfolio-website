// next.config.js

const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./i18n/locales'),
  ns: ['about'],
  defaultNS: 'about',
};
