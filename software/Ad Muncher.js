'use strict'

let data = {
  url: 'https://www.softpedia.com/get/Internet/Popup-Ad-Spyware-Blockers/Ad-Muncher.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'http://www.admuncher.com/cgi-bin/download.pl/AM-Install.exe'
  }
}
module.exports = data
