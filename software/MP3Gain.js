'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/mp3gain/files/MP3Gain-Windows%20%28Stable%29/'
  },
  downloadChoice: [null, /mp3gain-win-full-(.*?).zip/],
  install: 'install',
  other: {
    beta: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/mp3gain/files/MP3Gain-Windows%20%28Beta%29/'
      }
    }
  }
}
module.exports = data
