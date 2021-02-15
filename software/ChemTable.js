'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Autorun Organizer': {
      commercial: 3,
      url: 'https://www.chemtable.com/',
      version: '.programname:has(a[href="//www.chemtable.com/autorun-organizer.htm"])',
      download: 'https://www.chemtable.com/files/ao3/autorun-organizer-installer.exe'
    },
    'Files Inspector': {
      commercial: 3,
      url: 'https://www.chemtable.com/',
      version: '.programname:has(a[href="//www.chemtable.com/files-inspector.htm"])',
      download: 'https://www.chemtable.com/files/fi/files-inspector-setup.exe',
      install: 'install_inno_type'
    },
    'Reg Organizer': {
      commercial: 3,
      url: 'https://www.chemtable.com/',
      version: '.programname:has(a[href="//www.chemtable.com/organizer.htm"])',
      download: 'https://www.chemtable.com/builds/portable/reg-organizer-setup.exe',
      install: 'install_inno_type'
    },
    'Registry Life': {
      url: 'https://www.chemtable.com/RegistryLife.htm',
      version: 'h1',
      download: 'https://www.chemtable.com/files/registry-life-setup.exe',
      install: 'install_inno_type'
    },
    'Soft Organizer': {
      commercial: 3,
      url: 'https://www.chemtable.com/',
      version: '.programname:has(a[href="//www.chemtable.com/soft-organizer.htm"])',
      download: 'https://www.chemtable.com/files/soft-organizer-installer.exe'
    }
  }
};
