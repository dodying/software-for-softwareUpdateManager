'use strict'

let data = {
  commercial: 2,
  site: {
    Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools.shtml'
  },
  download: 'https://www.daemon-tools.cc/downloads/dtLite?direct=1',
  install: 'install_nsis',
  other: {
    Ultra: {
      url: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools-Ultra.shtml',
      download: 'https://www.daemon-tools.cc/downloads/dtproAdv?direct=1'
    },
    Pro: {
      url: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools-Pro.shtml',
      download: 'https://www.daemon-tools.cc/downloads/dtultra?direct=1'
    },
    Net: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools-Net.shtml'
      }
    },
    'iSCSI Target': {
      url: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools-iSCSI-Target.shtml',
      download: 'https://www.daemon-tools.cc/downloads/iscsi-target/platform/win?direct=1'
    },
    USB: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/DAEMON-Tools-USB.shtml'
      }
    }
  }
}
module.exports = data
