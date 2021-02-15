'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Copywhiz: {
      commercial: 3,
      url: 'https://www.conceptworld.com/Copywhiz/RevisionHistory',
      version: 'p>strong:contains("Version")',
      changelog: '.list-unstyled',
      download: 'https://www.conceptworld.com/Downloads/Copywhiz/CopywhizPortable.zip',
      install: 'install'
    },
    Notezilla: {
      commercial: 3,
      url: 'https://www.conceptworld.com/Notezilla/RevisionHistory',
      version: 'p>strong:contains("Version")',
      changelog: '.list-unstyled',
      download: 'https://www.conceptworld.com/Downloads/Notezilla/NotezillaPortable.zip',
      install: 'install'
    },
    RecentX: {
      commercial: 3,
      url: 'https://www.conceptworld.com/RecentX/RevisionHistory',
      version: 'p>strong:contains("Version")',
      changelog: '.list-unstyled',
      download: 'https://www.conceptworld.com/Downloads/RecentX/RecentXPortable.zip',
      install: 'install'
    }
  }
};
