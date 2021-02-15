'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Auburn: {
      url: 'http://www.the-sz.com/products/auburn/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=auburn',
      install: ['install_zipped', 'install_inno_single']
    },
    Bear: {
      url: 'http://www.the-sz.com/products/bear/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=bear',
      install: 'install_zipped_single'
    },
    Bedford: {
      url: 'http://www.the-sz.com/products/bedford/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=bedford',
      install: 'install_zipped_single'
    },
    Bennett: {
      url: 'http://www.the-sz.com/products/bennett/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=bennett',
      install: 'install_zipped_single'
    },
    Carroll: {
      url: 'http://www.the-sz.com/products/carroll/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=carroll',
      install: ['install_zipped', 'install_inno_single']
    },
    CDInfo: {
      url: 'http://www.the-sz.com/products/cdinfo/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=cdinfo',
      install: 'install_zipped_single'
    },
    CheckSum: {
      url: 'http://www.the-sz.com/products/checksum/',
      version: ['[itemprop="softwareVersion"]', 'text', /(.*)/],
      download: 'http://www.the-sz.com/common/get.php?product=checksum',
      install: 'install_zipped_single'
    },
    Compton: {
      url: 'http://www.the-sz.com/products/compton/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=compton',
      install: 'install_zipped_single'
    },
    Conroe: {
      url: 'http://www.the-sz.com/products/conroe/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=conroe',
      install: ['install_zipped', 'install_inno_single']
    },
    CPUGrabEx: {
      url: 'http://www.the-sz.com/products/cpugrabex/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=cpugrabex',
      install: 'install_zipped_single'
    },
    Doro: {
      url: 'http://www.the-sz.com/products/doro/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=doro',
      install: ['install_zipped', 'install_inno_type', null, null, null, { '{code_GetDirectory}': null }]
    },
    FlashBuilder: {
      url: 'http://www.the-sz.com/products/flash/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=flash',
      install: ['install_zipped', 'install_inno_single']
    },
    Grand: {
      url: 'http://www.the-sz.com/products/grand/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=grand',
      install: 'install_zipped_single'
    },
    Homedale: {
      url: 'http://www.the-sz.com/products/homedale/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=homedale',
      install: 'install_zipped_single'
    },
    Howard: {
      url: 'http://www.the-sz.com/products/howard/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=howard',
      install: ['install_zipped', 'install_inno']
    },
    Lacey: {
      url: 'http://www.the-sz.com/products/lacey/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=lacey',
      install: 'install_zipped_single'
    },
    Malden: {
      url: 'http://www.the-sz.com/products/malden/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=malden',
      install: 'install_zipped_single'
    },
    Medford: {
      url: 'http://www.the-sz.com/products/medford/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=medford',
      install: 'install_zipped_single'
    },
    Nassau: {
      url: 'http://www.the-sz.com/products/nassau/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=nassau',
      install: 'install_zipped_single'
    },
    Netchat: {
      url: 'http://www.the-sz.com/products/netchat/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=netchat',
      install: 'install_zipped_single'
    },
    Parkdale: {
      url: 'http://www.the-sz.com/products/parkdale/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=parkdale',
      install: 'install_zipped_single'
    },
    PEPatch: {
      url: 'http://www.the-sz.com/products/pe_patch/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=pe_patch',
      install: 'install_zipped_single'
    },
    PortScan: {
      url: 'http://www.the-sz.com/products/portscan/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=portscan',
      install: 'install_zipped_single'
    },
    Quartz: {
      url: 'http://www.the-sz.com/products/quartz/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=quartz',
      install: 'install_zipped_single'
    },
    Redwood: {
      url: 'http://www.the-sz.com/products/redwood/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=redwood',
      install: 'install_zipped_single'
    },
    RequestTrace: {
      url: 'http://www.the-sz.com/products/rt/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=rt',
      install: 'install_zipped_single'
    },
    Richmond: {
      url: 'http://www.the-sz.com/products/richmond/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=richmond',
      install: 'install_zipped_single'
    },
    Rimhill: {
      url: 'http://www.the-sz.com/products/rimhillex/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=rimhillex',
      install: ['install_zipped', 'install_inno_single']
    },
    Royal: {
      url: 'http://www.the-sz.com/products/royal/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=royal',
      install: 'install_zipped_single'
    },
    Seaside: {
      url: 'http://www.the-sz.com/products/seaside/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=seaside',
      install: ['install_zipped', 'install_inno_single']
    },
    Sherwood: {
      url: 'http://www.the-sz.com/products/sherwood/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=sherwood',
      install: 'install_zipped_single'
    },
    SkypeFocusFix: {
      url: 'http://www.the-sz.com/products/skypefocusfix/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=skypefocusfix',
      install: ['install_zipped', 'install_inno_single']
    },
    Spencer: {
      url: 'http://www.the-sz.com/products/spencer/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=spencer',
      install: 'install_zipped_single'
    },
    SpyEx: {
      url: 'http://www.the-sz.com/products/spyex/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=spyex',
      install: 'install_zipped_single'
    },
    Stanley: {
      url: 'http://www.the-sz.com/products/stanley/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=stanley',
      install: 'install_zipped_single'
    },
    Temple: {
      url: 'http://www.the-sz.com/products/temple/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=temple',
      install: 'install_zipped_single'
    },
    VisualCVS: {
      url: 'http://www.the-sz.com/products/visualcvs/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=visualcvs',
      install: ['install_zipped', 'install_inno']
    },
    Yale: {
      url: 'http://www.the-sz.com/products/yale/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=yale',
      install: 'install_zipped_single'
    },
    York: {
      url: 'http://www.the-sz.com/products/york/',
      version: '[itemprop="softwareVersion"]',
      download: 'http://www.the-sz.com/common/get.php?product=york',
      install: ['install_zipped', 'install_inno']
    }
  }
};
