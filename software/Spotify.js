'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Audio-Players/Spotify.shtml'
  },
  download: 'https://download.scdn.co/SpotifyFullSetup.exe',
  fixedPath: '%appdata%\\Spotify\\Spotify.exe',
  install: ['install_cli', null, [], { wait: true }]
}
module.exports = data
