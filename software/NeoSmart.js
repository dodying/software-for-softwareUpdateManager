'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Easy USB Creator': {
      commercial: 1,
      url: 'https://neosmart.net/Software/Changelog/21',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_single'
    },
    'Easy Window Switcher': {
      commercial: 1,
      url: 'https://neosmart.net/Software/Changelog/26',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_single'
    },
    EasyBCD: {
      commercial: 1,
      url: 'https://neosmart.net/Software/Changelog/1',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_nsis'
    },
    iReboot: {
      commercial: 1,
      url: 'https://neosmart.net/Software/Changelog/11',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_nsis'
    },
    'LastPass to 1Password Conversion Utility': {
      url: 'https://neosmart.net/Software/Changelog/28',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_single'
    },
    'ln-win': {
      url: 'https://neosmart.net/Software/Changelog/16',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: ['install_zipped_single', 'x64\\ln.exe']
    },
    'NST Downloader': {
      url: 'https://neosmart.net/Software/Changelog/15',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_single'
    },
    RunInBash: {
      url: 'https://neosmart.net/Software/Changelog/27',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_single'
    },
    ToolTipFixer: {
      url: 'https://neosmart.net/Software/Changelog/10',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_zipped_single'
    },
    TweakUI: {
      url: 'https://neosmart.net/Software/Changelog/6',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: ['install_msi_single', 'TweakUI64.exe']
    },
    uptime: {
      url: 'https://neosmart.net/Software/Changelog/29',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install_single'
    },
    'Windows OEM Product Key Tool': {
      url: 'https://neosmart.net/Software/Changelog/22',
      version: 'a[name]',
      changelog: 'ul',
      download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
      install: 'install'
    }
  }
};
