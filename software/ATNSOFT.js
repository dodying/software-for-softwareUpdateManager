'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Key Manager': {
      url: 'https://atnsoft.com/keymanager/versions/',
      version: ['h3', 'text', /^(.*) \(/],
      changelog: {
        selector: '#share+div',
        attr: 'text',
        split: true
      },
      download: 'https://atnsoft.com/downloads/keymanager_setup.exe',
      install: 'install_inno_single'
    },
    'Key Remapper': {
      url: 'https://atnsoft.com/keyremapper/versions/',
      version: ['h3', 'text', /^(.*) \(/],
      changelog: {
        selector: '#share+div',
        attr: 'text',
        split: true
      },
      download: 'https://atnsoft.com/downloads/keyremapper_setup.exe',
      install: 'install_inno_single'
    },
    'Text Paster': {
      url: 'https://atnsoft.com/textpaster/versions/',
      version: ['h3', 'text', /^(.*) \(/],
      changelog: {
        selector: '#share+div',
        attr: 'text',
        split: true
      },
      download: 'https://atnsoft.com/downloads/textpaster_setup.exe',
      install: 'install_inno_single'
    }
  }
};
