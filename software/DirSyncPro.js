'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/directorysync/files/DirSync%20Pro%20%28stable%29/'
  },
  versionChoice: /^(.*)$/,
  downloadChoice: [null, 'Windows.zip'],
  install: 'install',
  other: {
    unstable: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/directorysync/files/DirSync%20Pro%20%28unstable%29/'
      }
    }
  }
}
module.exports = data
