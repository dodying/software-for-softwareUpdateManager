'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/Chat/Other-Chat-Tools/Twitch-Desktop-App.shtml#download',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://updates.twitchapp.net/windows/installer/TwitchSetup.exe'
  }
}
module.exports = data
