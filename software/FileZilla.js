'use strict'

let data = {
  url: 'https://filezilla-project.org/download.php?type=client',
  version: '.downloadscreenshot+p',
  changelog: {
    url: 'https://filezilla-project.org/versions.php',
    selector: '.content',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: '#quickdownloadbuttonlink',
  install: 'install_nsis',
  other: {
    server: {
      url: 'https://filezilla-project.org/download.php?type=server'
    },
    nightly: {
      url: 'https://filezilla-project.org/nightly.php',
      version: ['.nightlysuccessful [href$="/win64/FileZilla.zip"]', 'href', /nightlies\/([\d-]+)\/win64/],
      download: '.nightlysuccessful [href$="/win64/FileZilla.zip"]'
    }
  }
}
module.exports = data
