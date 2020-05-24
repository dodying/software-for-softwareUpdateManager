'use strict';

const data = {
  url: 'https://ffmpeg.zeranoe.com/builds/builds.json',
  version: (res) => res.json.release[0],
  changelog: {
    url: 'https://raw.githubusercontent.com/FFmpeg/FFmpeg/master/Changelog',
    match: /^version [\d.]+/,
    split: true
  },
  download: 'https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-{version}-win64-static.zip',
  install: ['install', null, '*\\bin\\*.exe'],
  other: {
    nightly: {
      version: (res) => res.json.git[0],
      changelog: null
    }
  }
};
module.exports = data;
