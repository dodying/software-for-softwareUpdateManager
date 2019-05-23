'use strict'

let data = {
  url: 'https://www.digimezzo.com/content/software/vitomu/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '.name[href$="Portable.zip"]',
      sort: true,
      match: /Vitomu (.*?) - Portable.zip/
    })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '.name[href$="Portable.zip"]',
      sort: true
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
