'use strict';

module.exports = {
  type: 'software-list',
  list: {
    APFS: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/APFS-for-Windows.shtml'
      },
      install: ['install_msi', null, 'APFS for Windows by Paragon Software.exe']
    },
    'Image Mounter': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/CD-DVD-Tools/Virtual-CD-DVD-Rom/Image-Mounter.shtml'
      },
      install: ['install_wix', null, 'ImageMounter.msi', 'Paragon.ImageMounter.exe']
    },
    'Linux File Systems': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/Paragon-ExtFS.shtml'
      },
      install: ['install_msi', null, 'Linux File Systems for Windows by Paragon Software.exe']
    },
    'Paragon Backup & Recovery Free': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/Paragon-Drive-Backup-Express.shtml'
      },
      install: ['install_wix', null, /^BR\d+\.msi/, 'program/advlauncher.exe']
    },
    'Paragon Disk Wiper Professional': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Secure-cleaning/Paragon-Disk-Wiper-Personal.shtml'
      }
    },
    'Paragon Hard Disk Manager': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/Paragon-Hard-Disk-Manager.shtml'
      },
      install: ['install_wix', null, /^hdm/i, 'program/advlauncher.exe']
    },
    'Paragon HFS+': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/Paragon-HFS.shtml'
      },
      install: ['install_msi', null, 'HFS+ for Windows by Paragon Software.exe']
    },
    'Paragon VM Backup': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/Paragon-VM-Backup.shtml'
      }
    }
  }
};
