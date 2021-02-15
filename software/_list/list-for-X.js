'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'X-Mouse Button Control': {
      url: 'https://www.highrez.co.uk/downloads/xmbc_changelog.htm',
      version: 'br+div>div',
      changelog: 'body>div>ul',
      download: 'https://www.highrez.co.uk/scripts/download.asp?package=XMousePortable',
      install: ['install', null, '64bit*']
    },
    'X-WinFF': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/winpenpack/files/X-WinFF/releases/'
      },
      versionChoice: /X-WinFF_(.*?).zip/,
      install: 'install'
    },
    'x265 HEVC Encoder': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/x265%20HEVC%20Encoder/'
      },
      versionChoice: /\.([\d-]+).7z/,
      install: ['install', null, 'Win64']
    },
    x3270: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/x3270/files/x3270/'
      },
      versionChoice: '(.*)',
      downloadChoice: [null, 'noinstall-64.zip'],
      install: 'install'
    },
    x64dbg: {
      site: {
        GitHub: 'https://github.com/x64dbg/x64dbg/releases/latest'
      },
      versionChoice: ['.zip$', /(\d+[\d-_]+)/, false, 'name'],
      install: ['install', null, 'release\\']
    },
    XAMPP: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/'
      },
      downloadChoice: [null, /xampp-portable-windows-x64-(.*).7z/],
      install: 'install'
    },
    XCEL: {
      site: {
        GitHub: 'https://github.com/o2team/xcel/releases/latest'
      },
      versionChoice: /([\d.]+).exe/,
      install: 'install_nsis'
    },
    XCLWinKits: {
      url: 'https://www.wodeabc.com/Article/Show/8002027',
      version: 'h1:contains("最新")+p',
      changelog: 'h1:contains("最新")+p+ul',
      download: '[href$="64bit.zip"]',
      install: 'install'
    },
    Xdown: {
      url: 'https://xdown.org/',
      version: ['[href$="zip"][href*="dl.xdown.org/xdown"]', 'href', /xdown-([\d.]+).zip/],
      download: '[href$="zip"][href*="dl.xdown.org/xdown"]',
      install: 'install'
    },
    Xenos: {
      site: {
        GitHub: 'https://github.com/DarthTon/Xenos/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    Xinorbis: {
      url: 'http://www.xinorbis.com/downloads.htm',
      version: '.content > p:nth-child(19)',
      download: 'http://www.xinorbis.com/XinorbisPro64.zip',
      install: 'install'
    },
    Xiret: {
      url: 'https://www.bitmight.uk/software/xiret/changelog.txt',
      version: 'body',
      changelog: {
        match: /- Version [\d.]+/,
        split: true
      },
      download: 'https://bitmight.uk/software/xiret/download/xiret.zip',
      install: 'install_zipped_single'
    },
    'Xlideit Image Viewer': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/xlideit/files'
      },
      versionChoice: /Xlideit_([\d.]+).zip/,
      install: 'install_zipped_single'
    },
    'XMedia Recode': {
      url: 'https://www.xmedia-recode.de/en/download.php',
      version: '.download_table tr>td:nth-child(2)',
      changelog: {
        url: 'https://www.xmedia-recode.de/en/version.php',
        selector: '#page_content',
        attr: 'text',
        match: /^XMedia Recode [\d.]+/,
        split: true
      },
      download: '[href$="x64.zip"]',
      install: 'install'
    },
    xMenuTools: {
      site: {
        GitHub: 'https://github.com/xCONFLiCTiONx/xMenuTools/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    XMeters: {
      commercial: 2,
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/get/xmeters,1.html'
      },
      download: 'https://entropy6.com/xmeters/downloads/XMetersSetup.exe',
      install: ['install_wix', null, 'XMetersSetup_x64.msi', 'XMeters.exe']
    },
    XMPlay: {
      url: 'http://www.un4seen.com/xmplay.html',
      version: '#phead > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2)',
      download: 'a[href^="download.php"]',
      install: 'install'
    },
    Xonotic: {
      url: 'https://xonotic.org/download/',
      version: 'h2+h3',
      download: '[href$=".zip"]',
      install: 'install'
    },
    Xpadder: {
      commercial: 3,
      site: {
        TechSpot: 'https://www.techspot.com/downloads/5869-xpadder.html'
      },
      install: 'install'
    },
    Xpatch: {
      site: {
        GitHub: 'https://github.com/WindySha/Xpatch/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    xplorer2: {
      commercial: 2,
      url: 'https://www.zabkat.com/index.htm',
      version: 'h1+p+p',
      changelog: {
        url: 'https://www.zabkat.com/changes.txt',
        match: /^\[[\d.]+/,
        split: true
      },
      download: 'https://www.zabkat.com/download.php?p=3',
      install: 'install_nsis',
      other: {
        ultimate: {
          download: 'https://www.zabkat.com/download.php?p=3&u=1'
        }
      }
    },
    Xray: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/XTLS/Xray-core/releases/latest'
      },
      versionChoice: 'windows-64.zip',
      install: 'install'
    },
    XRecode3: {
      commercial: 3,
      url: 'https://xrecode.com/',
      version: '[href$=".7z"][href*="64bit"]',
      changelog: {
        url: 'https://xrecode.com/whatsnew/whatsnew.txt',
        match: /- version [\d.]+/,
        split: true
      },
      download: '[href$=".7z"][href*="64bit"]',
      install: 'install',
      other: {
        cli: {
          version: '[href$=".7z"][href*="64bit"][href*="console"]',
          download: '[href$=".7z"][href*="64bit"][href*="console"]'
        }
      }
    },
    XT800: {
      commercial: 1,
      url: 'http://www.xt800.cn/support/faq?pid=810',
      version: ['h3+h3', 'text', /V(\d+[\d.]+\d+)/],
      changelog: {
        url: 'http://www.xt800.cn/support/faq?pid=810',
        selector: '.p_custom ',
        attr: 'text',
        match: /V[\d.]+==$/,
        split: true
      },
      download: 'http://www.xt800.cn/download/latest?t=p',
      install: 'install_nsis'
    },
    'Xtreme Download Manager': {
      site: {
        GitHub: 'https://github.com/subhra74/xdm/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'xdman.jar']
    },
    Xvast: {
      url: 'https://www.xvast.cn/',
      version: ['.section-desc', 'text', /^([\w.]+)/],
      changelog: '#update-log>p:contains("Windows")',
      download: 'https://cn.haihaisoft.com/download/XvastInstaller.exe',
      install: 'install_inno'
    },
    xVideoServiceThief: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/xviservicethief/files/Windows%20Binaries/'
      },
      versionChoice: /(.*) bin/,
      downloadChoice: [/(.*) bin/, 'windows-static.zip'],
      install: 'install'
    },
    'XX-Net': {
      site: {
        GitHub: 'https://github.com/XX-net/XX-Net/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    XYHerlper: {
      url: 'https://www.xyzs.com/zhushou/pc/',
      version: '.v1',
      download: '.download',
      install: 'install'
    },
    XYplorer: {
      commercial: 2,
      url: 'https://www.xyplorer.com/',
      version: 'a[href$=".zip"]+br+br+p',
      changelog: ['https://www.xyplorer.com/whatsnew.php', '.waznu'],
      download: 'https://www.xyplorer.com/download/xyplorer_full.zip',
      install: ['install_zipped', 'install_nsis', '.exe']
    }
  }
};
