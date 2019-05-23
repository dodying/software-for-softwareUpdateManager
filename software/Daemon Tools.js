'use strict'

let data = {
  commercial: 2,
  site: {
    Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.nsis(output, iPath)
  },
  other: {
    Ultra: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools-Ultra.shtml'
      }
    },
    Pro: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools-Pro.shtml'
      }
    }
  }
}
module.exports = data
