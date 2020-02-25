'use strict'

let data = {
  commercial: 2,
  url: 'http://blog.bittorrent.com/releases/windows/',
  version: ['h1>a', 'text', /BitTorrent (.*?) For Windows \(build (\d+)\)/, '$1.$2'],
  changelog: '.entry-content>ul',
  download: 'http://download-new.utorrent.com/endpoint/bittorrent/os/windows/track/stable/',
  install: ['install_zipped_single', 'Carrier.EXE']
}
module.exports = data
