'use strict'

let data = {
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
module.exports = data
