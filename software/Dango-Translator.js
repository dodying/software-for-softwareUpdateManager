'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/PantsuDango/Dango-Translator/releases/latest'
  },
  versionChoice: ['.rar', 'Ver(.*)'],
  install: ['install', null, '*\\Ver*', '-p"Dango"']
};
