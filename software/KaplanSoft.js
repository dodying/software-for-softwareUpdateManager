'use strict';

module.exports = {
  type: 'software-list',
  list: {
    ARPMiner: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("ARPMiner")>td[align="center"]',
      download: 'https://www.kaplansoft.com/arpminer/release/ARPMiner.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'ARPMiner.exe']
    },
    'ENUM Resolver': {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("ENUM Resolver")>td[align="center"]',
      download: 'https://www.kaplansoft.com/enumresolver/release/ENUMResolver.zip',
      install: 'install_zipped_single'
    },
    SipCLI: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("SipCLI")>td[align="center"]',
      download: 'https://www.kaplansoft.com/SipCLI/release/SipCLI.zip',
      install: 'install_zipped_single'
    },
    SIPob: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("SIPob")>td[align="center"]',
      download: 'https://www.kaplansoft.com/sipob/release/SIPob.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'SIPob.exe']
    },
    SMPPCli: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("SMPPCli")>td[align="center"]',
      download: 'https://www.kaplansoft.com/smppcli/release/SMPPCli.zip',
      install: 'install'
    },
    Tekaba: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("Tekaba")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekaba/release/Tekaba.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TAManager.exe']
    },
    TekCERT: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekCERT")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekcert/release/TekCERT.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekCERT.exe']
    },
    TekConSer: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekConSer")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekconser/release/TekConSer.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekConSer.exe']
    },
    TekENUM: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekENUM")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekenum/release/TekENUM.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TEManager.exe']
    },
    TekFax: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekFax")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekfax/release/TekFax.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekFax.exe']
    },
    TekIVR: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekIVR")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekivr/release/TekIVR.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekIVR.exe']
    },
    TekOTP: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekOTP")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekotp/release/TekOTP.zip',
      install: 'install_zipped_single'
    },
    TekPhone: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekPhone")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekphone/release/TekPhone.zip',
      install: ['install_zipped', 'install_msi_single', '.msi', null, 'TekPhone.exe']
    },
    'TekRADIUS LT': {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekRADIUS LT")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekradius/release/TekRADIUSLT.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekRADIUSLT.exe']
    },
    TekRADIUS: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekRADIUS")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekradius/release/TekRADIUS.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekRADIUS.exe']
    },
    TekRecorder: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekRecorder")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekrecorder/release/TekRecorder.zip',
      install: 'install_zipped_single'
    },
    'TekSIP Route Server': {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekSIP Route Server")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tsrserver/release/TSRServer.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TSRServer.exe']
    },
    TekSIP: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekSIP")>td[align="center"]',
      download: 'https://www.kaplansoft.com/teksip/release/TekSIP.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekSIP.exe']
    },
    TekSMTP: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekSMTP")>td[align="center"]',
      download: 'https://www.kaplansoft.com/teksmtp/release/TekSMTP.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekSMTP.exe']
    },
    TekTape: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekTape")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tektape/release/TekTape.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'TekTape.exe']
    },
    TekWiFi: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TekWiFi")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekwifi/release/TekWiFi.zip',
      install: 'install_zipped_single'
    },
    TelCLI: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("TelCLI")>td[align="center"]',
      download: 'https://www.kaplansoft.com/tekphone/release/TekPhone.zip',
      install: ['install_zipped', 'install_msi_single', '.msi', 'TekPhone.exe']
    },
    WebKilit: {
      url: 'https://www.kaplansoft.com/download.html',
      version: '.pricerow:contains("WebKilit")>td[align="center"]',
      download: 'https://www.kaplansoft.com/webkilit/release/WebKilit.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'WKManager.exe']
    }
  }
};
