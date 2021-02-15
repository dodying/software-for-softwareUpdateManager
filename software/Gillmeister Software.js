'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Automatic Email Processor': {
      url: 'https://gillmeister-software.com/products/automatic-email-processor/changelog.aspx',
      version: '.headline-left-1>h3',
      changelog: '.headline-left-1+ul',
      download: 'https://gillmeister-software.com/downloads/aep-setup.exe',
      install: ['install_inno_type', null, null, { '{code_GetBitnessDefaultInstallDir}': '{dir}' }]
    },
    'AutoText Master': {
      url: 'https://gillmeister-software.com/products/autotext-master/changelog.aspx',
      version: '.headline-left-1>h3',
      changelog: '.headline-left-1+ul',
      download: 'https://gillmeister-software.com/downloads/atm-setup.exe',
      install: 'install_inno_type'
    },
    'Batch Text Replacer': {
      url: 'https://gillmeister-software.com/products/batch-text-replacer/changelog.aspx',
      version: '.headline-left-1>h3',
      changelog: '.headline-left-1+ul',
      download: 'https://gillmeister-software.com/downloads/btr-setup.exe',
      install: 'install_inno'
    },
    Folder2List: {
      url: 'https://www.folder2list.com/changelog.aspx',
      version: '.content>h2',
      changelog: '.content>ul',
      download: 'https://www.folder2list.com/downloads/folder2list-setup.exe',
      install: 'install_inno'
    },
    'Outlook Attachment Extractor': {
      url: 'https://www.outlook-attachment-extractor.com/changelog.aspx',
      version: '.content>h3',
      changelog: '.content>ul',
      download: 'https://www.outlook-attachment-extractor.com/downloads/oae-setup.exe',
      install: ['install_inno_type', null, null, { '{code_GetBitnessDefaultInstallDir}': '{dir}' }]
    },
    'Rename Expert': {
      url: 'https://www.rename-expert.com/changelog.aspx',
      version: '.content>h2',
      changelog: '.content>ul',
      download: 'https://www.rename-expert.com/downloads/rename_expert-setup.exe',
      install: 'install_inno'
    },
    'Word Text Replacer': {
      url: 'https://gillmeister-software.com/products/word-text-replacer/changelog.aspx',
      version: '.headline-left-1>h3',
      changelog: '.headline-left-1+ul',
      download: 'https://gillmeister-software.com/downloads/wtr-setup.exe',
      install: ['install_inno_type', null, null, { '{code_GetBitnessDefaultInstallDir}': '{dir}' }]
    }
  }
};
