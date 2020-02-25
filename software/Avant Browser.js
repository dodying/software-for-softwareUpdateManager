'use strict'

let data = {
  url: 'http://www.avantbrowser.com/new.aspx',
  version: ['h2', 'text', /Avant Browser (\d{4}) build (\d+), .*$/, '$1.$2'],
  changelog: '.new',
  download: 'http://dl3.avantbrowser.com/avant.exe',
  install: 'install'
}
module.exports = data
