'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/avisynth2/files/AviSynth%202.6/'
  },
  versionChoice: /AviSynth (.*)$/,
  downloadChoice: [/AviSynth (.*)$/, /.exe/],
  install: 'install_nsis',
  other: {
    alpha: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/avisynth2/files/AviSynth_Alpha_Releases/'
      },
      versionChoice: /AVS (.*)$/,
      downloadChoice: [/AVS (.*)$/, /.exe/]
    }
  }
}
module.exports = data
