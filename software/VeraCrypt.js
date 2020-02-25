'use strict'

let data = {
  url: 'https://www.veracrypt.fr/en/Downloads.html',
  version: ['[href$=".exe"][href*="Portable"]', 'text', /Portable (.*?).exe/],
  changelog: ['https://www.veracrypt.fr/en/Release%20Notes.html', '.wikidoc>ul'],
  download: '[href$=".exe"][href*="Portable"]'
}
module.exports = data
