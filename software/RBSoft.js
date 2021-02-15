'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Autoshutdown Scheduler': {
      url: 'https://rbsoft.org/downloads/autoshutdown-scheduler/',
      version: '#section-changelog>h3',
      changelog: {
        selector: '#section-changelog',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'https://rbsoft.org/downloads/autoshutdown-scheduler/AutoShutdown-Scheduler.zip',
      install: 'install'
    },
    'Easy Disk Catalog Maker': {
      commercial: 2,
      url: 'https://rbsoft.org/downloads/easy-disk-catalog-maker/changelog.html',
      version: '#section-changelog>h3',
      changelog: {
        selector: '#section-changelog',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'https://rbsoft.org/downloads/easy-disk-catalog-maker/Easy-Disk-Catalog-Maker-Setup.exe',
      install: 'install_nsis'
    },
    'My Computer Manager': {
      url: 'https://rbsoft.org/downloads/my-computer-manager/',
      version: '#section-changelog>h3',
      changelog: {
        selector: '#section-changelog',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'https://rbsoft.org/downloads/my-computer-manager/My-Computer-Manager.zip',
      install: 'install'
    },
    'Right Click Enhancer': {
      commercial: 2,
      url: 'https://rbsoft.org/downloads/right-click-enhancer/rce-changelog.html',
      version: '#section-changelog>h3',
      changelog: {
        selector: '#section-changelog',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'https://rbsoft.org/downloads/right-click-enhancer/Right-Click-Enhancer.zip',
      install: 'install'
    },
    'Sales Manager': {
      site: {
        GitHub: 'https://github.com/ravibpatel/SalesManager/releases/latest'
      },
      install: 'install'
    }
  }
};
