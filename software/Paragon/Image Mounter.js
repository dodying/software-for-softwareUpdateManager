'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/Image-Mounter.shtml'
  },
  preferPath: 'Paragon.ImageMounter.exe',
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, 'ImageMounter.msi', data.preferPath)
  }
}
module.exports = data
