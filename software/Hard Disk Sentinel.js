'use strict'

let data = {
  commercial: 3,
  url: 'https://www.hdsentinel.com/download.php',
  version: {
    selector: 'a[href="hard_disk_sentinel_professional.php#portable"]+b'
  },
  download: {
    plain: 'https://www.harddisksentinel.com/hdsentinel_pro_portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
