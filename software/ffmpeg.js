'use strict'

let data = {
  url: 'https://ffmpeg.zeranoe.com/builds/',
  version: ['label[title^="Release"]', 'text', /(.*)/],
  changelog: {
    url: 'https://raw.githubusercontent.com/FFmpeg/FFmpeg/master/Changelog',
    match: /^version [\d.]+/,
    split: true
  },
  download: 'https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-{version}-win64-static.zip',
  install: ['install', null, '*\\bin\\*.exe'],
  other: {
    nightly: {
      version: {
        selector: 'label[title^="Nightly"]',
        match: /(.*)/
      }
    }
  }
}
module.exports = data
