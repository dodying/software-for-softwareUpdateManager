'use strict';

module.exports = {
  type: 'software-list',
  list: {
    DiskBoss: {
      commercial: 3,
      url: 'https://www.diskboss.com/downloads.html',
      version: '.downloads_table tr:contains("DiskBoss")',
      changelog: ['https://www.diskboss.com/news.html', '.news_item'],
      download: '.downloads_table tr:contains("DiskBoss") a[href$="x64.exe"]',
      install: 'install_nsis',
      other: {
        Pro: {
          version: '.downloads_table tr:contains("DiskBoss Pro")',
          download: '.downloads_table tr:contains("DiskBoss Pro") a[href$="x64.exe"]'
        },
        Ultimate: {
          version: '.downloads_table tr:contains("DiskBoss Ultimate")',
          download: '.downloads_table tr:contains("DiskBoss Ultimate") a[href$="x64.exe"]'
        },
        Server: {
          version: '.downloads_table tr:contains("DiskBoss Server")',
          download: '.downloads_table tr:contains("DiskBoss Server") a[href$="x64.exe"]'
        },
        Enterprise: {
          version: '.downloads_table tr:contains("DiskBoss Enterprise")',
          download: '.downloads_table tr:contains("DiskBoss Enterprise") a[href$="x64.exe"]'
        }
      }
    },
    DiskPulse: {
      commercial: 3,
      url: 'https://www.diskpulse.com/downloads.html',
      version: '.downloads_table tr:contains("Disk Pulse")',
      changelog: ['https://www.diskpulse.com/news.html', '.news_item'],
      download: '.downloads_table tr:contains("Disk Pulse") a[href$="x64.exe"]',
      install: 'install_nsis',
      other: {
        Pro: {
          version: '.downloads_table tr:contains("Disk Pulse Pro")',
          download: '.downloads_table tr:contains("Disk Pulse Pro") a[href$="x64.exe"]'
        },
        Ultimate: {
          version: '.downloads_table tr:contains("Disk Pulse Ultimate")',
          download: '.downloads_table tr:contains("Disk Pulse Ultimate") a[href$="x64.exe"]'
        },
        Server: {
          version: '.downloads_table tr:contains("Disk Pulse Server")',
          download: '.downloads_table tr:contains("Disk Pulse Server") a[href$="x64.exe"]'
        },
        Enterprise: {
          version: '.downloads_table tr:contains("Disk Pulse Enterprise")',
          download: '.downloads_table tr:contains("Disk Pulse Enterprise") a[href$="x64.exe"]'
        }
      }
    },
    DiskSavvy: {
      commercial: 3,
      url: 'https://www.disksavvy.com/downloads.html',
      version: '.downloads_table tr:contains("Disk Savvy")',
      changelog: ['https://www.disksavvy.com/news.html', '.news_item'],
      download: '.downloads_table tr:contains("Disk Savvy") a[href$="x64.exe"]',
      install: 'install_nsis',
      other: {
        Pro: {
          version: '.downloads_table tr:contains("Disk Savvy Pro")',
          download: '.downloads_table tr:contains("Disk Savvy Pro") a[href$="x64.exe"]'
        },
        Ultimate: {
          version: '.downloads_table tr:contains("Disk Savvy Ultimate")',
          download: '.downloads_table tr:contains("Disk Savvy Ultimate") a[href$="x64.exe"]'
        },
        Server: {
          version: '.downloads_table tr:contains("Disk Savvy Server")',
          download: '.downloads_table tr:contains("Disk Savvy Server") a[href$="x64.exe"]'
        },
        Enterprise: {
          version: '.downloads_table tr:contains("Disk Savvy Enterprise")',
          download: '.downloads_table tr:contains("Disk Savvy Enterprise") a[href$="x64.exe"]'
        }
      }
    },
    DiskSorter: {
      commercial: 3,
      url: 'https://www.disksorter.com/downloads.html',
      version: '.downloads_table tr:contains("Disk Sorter")',
      changelog: ['https://www.disksorter.com/news.html', '.news_item'],
      download: '.downloads_table tr:contains("Disk Sorter") a[href$="x64.exe"]',
      install: 'install_nsis',
      other: {
        Pro: {
          version: '.downloads_table tr:contains("Disk Sorter Pro")',
          download: '.downloads_table tr:contains("Disk Sorter Pro") a[href$="x64.exe"]'
        },
        Ultimate: {
          version: '.downloads_table tr:contains("Disk Sorter Ultimate")',
          download: '.downloads_table tr:contains("Disk Sorter Ultimate") a[href$="x64.exe"]'
        },
        Server: {
          version: '.downloads_table tr:contains("Disk Sorter Server")',
          download: '.downloads_table tr:contains("Disk Sorter Server") a[href$="x64.exe"]'
        },
        Enterprise: {
          version: '.downloads_table tr:contains("Disk Sorter Enterprise")',
          download: '.downloads_table tr:contains("Disk Sorter Enterprise") a[href$="x64.exe"]'
        }
      }
    },
    DupScout: {
      commercial: 3,
      url: 'https://www.dupscout.com/downloads.html',
      version: '.downloads_table tr:contains("Dup Scout")',
      changelog: ['https://www.dupscout.com/news.html', '.news_item'],
      download: '.downloads_table tr:contains("Dup Scout") a[href$="x64.exe"]',
      install: 'install_nsis',
      other: {
        Pro: {
          version: '.downloads_table tr:contains("Dup Scout Pro")',
          download: '.downloads_table tr:contains("Dup Scout Pro") a[href$="x64.exe"]'
        },
        Ultimate: {
          version: '.downloads_table tr:contains("Dup Scout Ultimate")',
          download: '.downloads_table tr:contains("Dup Scout Ultimate") a[href$="x64.exe"]'
        },
        Server: {
          version: '.downloads_table tr:contains("Dup Scout Server")',
          download: '.downloads_table tr:contains("Dup Scout Server") a[href$="x64.exe"]'
        },
        Enterprise: {
          version: '.downloads_table tr:contains("Dup Scout Enterprise")',
          download: '.downloads_table tr:contains("Dup Scout Enterprise") a[href$="x64.exe"]'
        }
      }
    },
    SyncBreeze: {
      commercial: 3,
      url: 'https://www.syncbreeze.com/downloads.html',
      version: '.downloads_table tr:contains("Sync Breeze")',
      changelog: ['https://www.syncbreeze.com/news.html', '.news_item'],
      download: '.downloads_table tr:contains("Sync Breeze") a[href$="x64.exe"]',
      install: 'install_nsis',
      other: {
        Pro: {
          version: '.downloads_table tr:contains("Sync Breeze Pro")',
          download: '.downloads_table tr:contains("Sync Breeze Pro") a[href$="x64.exe"]'
        },
        Ultimate: {
          version: '.downloads_table tr:contains("Sync Breeze Ultimate")',
          download: '.downloads_table tr:contains("Sync Breeze Ultimate") a[href$="x64.exe"]'
        },
        Server: {
          version: '.downloads_table tr:contains("Sync Breeze Server")',
          download: '.downloads_table tr:contains("Sync Breeze Server") a[href$="x64.exe"]'
        },
        Enterprise: {
          version: '.downloads_table tr:contains("Sync Breeze Enterprise")',
          download: '.downloads_table tr:contains("Sync Breeze Enterprise") a[href$="x64.exe"]'
        }
      }
    },
    SysGauge: {
      commercial: 3,
      url: 'https://www.sysgauge.com/downloads.html',
      version: '.downloads_table tr:contains("SysGauge")',
      changelog: ['https://www.sysgauge.com/news.html', '.news_item'],
      download: '.downloads_table tr:contains("SysGauge") a[href$="x64.exe"]',
      install: 'install_nsis',
      other: {
        Pro: {
          version: '.downloads_table tr:contains("SysGauge Pro")',
          download: '.downloads_table tr:contains("SysGauge Pro") a[href$="x64.exe"]'
        },
        Ultimate: {
          version: '.downloads_table tr:contains("SysGauge Ultimate")',
          download: '.downloads_table tr:contains("SysGauge Ultimate") a[href$="x64.exe"]'
        },
        Server: {
          version: '.downloads_table tr:contains("SysGauge Server")',
          download: '.downloads_table tr:contains("SysGauge Server") a[href$="x64.exe"]'
        }
        // Enterprise: {
        //   version: `.downloads_table tr:contains("SysGauge Enterprise")`,
        //   download: `.downloads_table tr:contains("SysGauge Enterprise") a[href$="x64.exe"]`
        // }
      }
    },
    'VX Search': {
      commercial: 3,
      url: 'https://www.vxsearch.com/downloads.html',
      version: '.downloads_table tr:contains("VX Search")',
      changelog: ['https://www.vxsearch.com/news.html', '.news_item'],
      download: '.downloads_table tr:contains("VX Search") a[href$="x64.exe"]',
      install: 'install_nsis',
      other: {
        Pro: {
          version: '.downloads_table tr:contains("VX Search Pro")',
          download: '.downloads_table tr:contains("VX Search Pro") a[href$="x64.exe"]'
        },
        Ultimate: {
          version: '.downloads_table tr:contains("VX Search Ultimate")',
          download: '.downloads_table tr:contains("VX Search Ultimate") a[href$="x64.exe"]'
        },
        Server: {
          version: '.downloads_table tr:contains("VX Search Server")',
          download: '.downloads_table tr:contains("VX Search Server") a[href$="x64.exe"]'
        },
        Enterprise: {
          version: '.downloads_table tr:contains("VX Search Enterprise")',
          download: '.downloads_table tr:contains("VX Search Enterprise") a[href$="x64.exe"]'
        }
      }
    }
  }
};
