'use strict'

let data = {
  url: 'http://ftp.gnome.org/pub/GNOME/binaries/win64/gedit/',
  version: ['a[href^="gedit-x86_64"][href$=".msi"]', 'href', /-(\d+[\d.]+\d+).msi$/],
  download: 'a[href^="gedit-x86_64"][href$=".msi"]',
  install: ['install_msi', null, 'bin/gedit.exe']
}
module.exports = data
