'use strict'

let data = {
  commercial: 1,
  url: 'https://www.moo0.com/software/Magnifier/',
  version: ['.tdSoftwareInfoData>strong', 'text', /(.*)/],
  changelog: '.tdSoftwareInfoDescriptionData>p:has([href*="/history/"])',
  download: 'https://www.moo0.com/software/Magnifier/download/free/',
  install: 'install_zipped_single'
}
module.exports = data
