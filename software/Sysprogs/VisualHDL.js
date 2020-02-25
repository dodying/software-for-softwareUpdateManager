'use strict'

let data = {
  url: 'https://sysprogs.com/legacy/visualhdl/download/',
  version: ['.download_button', 'href', /VisualHDL-(.*?).exe/],
  download: '.download_button'
}
module.exports = data
