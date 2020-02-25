'use strict'

let data = {
  url: 'https://sysprogs.com/legacy/visualddk/download/',
  version: ['.download_button', 'href', /VisualDDK-(.*?).exe/],
  download: '.download_button'
}
module.exports = data
