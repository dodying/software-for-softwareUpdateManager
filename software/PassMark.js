'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AppTimer: {
      url: 'https://www.passmark.com/products/apptimer.htm',
      version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      download: 'https://www.passmark.com/ftp/AppTimer.zip',
      install: 'install_zipped_single'
    },
    BatteryMon: {
      commercial: 3,
      url: 'https://www.passmark.com/products/batmon.htm',
      version: ['li:contains("Version")', 'text', /Versions: V(.*)/],
      download: 'https://www.passmark.com/ftp/batmon.exe',
      install: 'install_inno'
    },
    BurnInTest: {
      commercial: 3,
      url: 'https://www.passmark.com/products/burnintest/history.php',
      version: ['#block_2>div>div>p', 'text', /([\d.]+ build \d+)/],
      changelog: '#block_2>div>div>ul',
      download: 'https://www.passmark.com/ftp/bitpro.exe',
      install: 'install_inno_type'
    },
    DiskCheckup: {
      url: 'https://www.passmark.com/products/diskcheckup.htm',
      version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      download: 'https://www.passmark.com/ftp/diskcheckup.exe',
      install: 'install_inno_type'
    },
    ImageUSB: {
      url: 'https://www.osforensics.com/tools/write-usb-images.html',
      version: '.whats-new-block>h3',
      changelog: '.whats-new-block',
      download: 'https://www.osforensics.com/downloads/imageusb.zip',
      install: 'install_zipped_single'
    },
    KeyboardTest: {
      commercial: 3,
      url: 'https://www.passmark.com/products/keytest.htm',
      version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      download: 'https://www.passmark.com/ftp/keytest.exe',
      install: 'install_inno'
    },
    MonitorTest: {
      commercial: 3,
      url: 'https://www.passmark.com/products/monitortest.htm',
      version: ['#block_content .row h1~ul>li:last-child', 'text', /([\d.]+) \(Build (\d+)/, '$1.$2'],
      download: 'https://www.passmark.com/ftp/montest.exe',
      install: 'install_inno'
    },
    OSFClone: {
      url: 'https://www.osforensics.com/tools/create-disk-images.html',
      version: '.whats-new-block>h3',
      changelog: '.whats-new-block',
      download: 'https://www.osforensics.com/downloads/osfclone.zip',
      install: 'install'
    },
    OSFMount: {
      url: 'https://www.osforensics.com/tools/mount-disk-images.html',
      version: '.whats-new-block>h3',
      changelog: '.whats-new-block',
      download: 'https://www.osforensics.com/downloads/osfmount.exe',
      install: 'install_inno'
    },
    OSForensics: {
      commercial: 3,
      url: 'https://www.osforensics.com/whatsnew.html',
      version: ['.whats-new-block>h3', 'text', /([\d.]+ build \d+)/],
      changelog: '.whats-new-block',
      download: 'https://downloads.passmark.com/osforensics/downloads/osf.exe',
      install: 'install_inno'
    },
    'PassMark Fragger': {
      url: 'https://www.passmark.com/products/fragger.htm',
      version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      download: 'https://www.passmark.com/ftp/fragger-setup.exe',
      install: 'install_inno'
    },
    PerformanceTest: {
      commercial: 3,
      url: 'https://www.passmark.com/products/performancetest/history.php',
      version: ['#block_2>div>div>p', 'text', /([\d.]+ Build \d+)/],
      changelog: '#block_2>div>div>ul',
      download: 'https://www.passmark.com/ftp/petst.exe',
      install: 'install_inno'
    },
    RAMMon: {
      url: 'https://www.passmark.com/products/rammon.htm',
      version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      download: 'https://www.passmark.com/ftp/rammon.exe',
      install: 'install_inno'
    },
    Rebooter: {
      url: 'https://www.passmark.com/products/rebooter.htm',
      version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      download: 'https://www.passmark.com/ftp/rebooter.zip',
      install: 'install_zipped_single'
    },
    Sleeper: {
      url: 'https://www.passmark.com/products/sleeper/history.php',
      version: ['#block_2>div>div>p', 'text', /([\d.]+) \((\d+)\)/, '$1.$2'],
      changelog: '#block_2>div>div>ul',
      download: 'https://www.passmark.com/ftp/sleeper.zip',
      install: 'install_zipped_single'
    },
    SoundCheck: {
      url: 'https://www.passmark.com/products/soundcheck.htm',
      version: ['li:contains("Version")', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      download: 'https://www.passmark.com/ftp/soundchk.exe',
      install: 'install_inno'
    },
    TestLog: {
      commercial: 3,
      url: 'http://www.testlog.com/',
      version: ['.sidebox>p', 'text', /([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      changelog: ['http://www.testlog.com/support/ver_history.htm', '.Normal+ul'],
      download: 'http://www.testlog.com/ftp/testlog.exe',
      install: 'install_inno'
    },
    'Volatility Workbench': {
      url: 'https://www.osforensics.com/tools/volatility-workbench.html',
      version: '.whats-new-block>h3',
      changelog: '.whats-new-block',
      download: 'https://www.osforensics.com/downloads/VolatilityWorkbench.zip',
      install: 'install'
    },
    WirelessMon: {
      commercial: 3,
      url: 'https://www.passmark.com/products/wirelessmonitor/history.php',
      version: ['#block_2>div>div>p', 'text', /([\d.]+ build \d+)/],
      changelog: '#block_2>div>div>ul',
      download: 'https://www.passmark.com/ftp/wirelessmon.exe',
      install: 'install_inno'
    },
    'Zoom Search Engine': {
      url: 'https://www.zoomsearchengine.com/zoom/index.html',
      version: ['.latestnews', 'text', /V(\d.*)/],
      changelog: ['https://www.zoomsearchengine.com/zoom/whatsnew.html', '#windows>ul'],
      download: 'https://www.zoomsearchengine.com/ftp/zoomsearch.exe',
      install: 'install_inno_type'
    }
  }
};
