'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/rhash/files/rhash/'
  },
  downloadChoice: [null, /rhash-(.*?)-win64.zip/],
  install: ['install_zipped_single', 'rhash.exe']
}
module.exports = data
