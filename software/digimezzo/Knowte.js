'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/digimezzo/knowte-electron/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
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
}
module.exports = data
