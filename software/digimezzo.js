'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Dopamine: {
      url: 'https://www.digimezzo.com/content/software/dopamine/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.name[href$="Portable.zip"]',
        sort: true,
        match: /Dopamine (.*?) - Portable.zip/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.name[href$="Portable.zip"]',
        sort: true
      }),
      install: 'install'
    },
    Knowte: {
      site: {
        GitHub: 'https://github.com/digimezzo/knowte/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        1: {
          url: 'https://www.digimezzo.com/content/software/knowte/',
          version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: '.name[href$="Portable.zip"]',
            sort: true,
            match: /Knowte (.*?) - Portable.zip/
          }),
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: '.name[href$="Portable.zip"]',
            sort: true
          }),
          install: 'install'
        }
      }
    },
    Vitomu: {
      url: 'https://www.digimezzo.com/content/software/vitomu/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.name[href$="Portable.zip"]',
        sort: true,
        match: /Vitomu (.*?) - Portable.zip/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.name[href$="Portable.zip"]',
        sort: true
      }),
      install: 'install'
    }
  }
};
