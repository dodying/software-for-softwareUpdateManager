'use strict'

let data = {
  commercial: 2,
  url: 'http://cintanotes.com/download/',
  version: '.download-button>a',
  changelog: ['http://cintanotes.com/release-notes/', '.entry-content'],
  download: (res, $) => $('a[href$=".zip"]').attr('href').replace('/download-start?file=', ''),
  install: 'install'
}
module.exports = data
