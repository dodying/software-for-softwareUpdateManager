'use strict';

module.exports = {
  type: 'software-list',
  list: {
    '30SecondSilencer': {
      url: 'http://www.dcmembers.com/nod5/download/30secondsilencer/',
      version: ['p:has(strong:contains("Changelog"))+p', 'text', /(.*)/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    BigTimer: {
      url: 'http://www.dcmembers.com/nod5/download/bigtimer/',
      version: ['p:has(strong:contains("Changelog"))+p', 'text', /(.*)/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    BookCrop: {
      site: {
        GitHub: 'https://github.com/nod5/BookCrop/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    BookGapCheck: {
      site: {
        GitHub: 'https://github.com/nod5/BookGapCheck/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Everything Efu Explorer': {
      url: 'http://www.dcmembers.com/nod5/download/everything-efu-explorer/',
      version: ['p:has(strong:contains("Changelog"))+p', 'text', /(.*)/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    FFBookmarkUnpacker: {
      url: 'http://www.dcmembers.com/nod5/download/ffbookmarkunpacker/',
      version: ['p:has(strong:contains("Changelog"))+p', 'text', /(.*)/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    FileNoter: {
      url: 'http://www.dcmembers.com/nod5/download/filenoter/',
      version: ['p:has(strong:contains("Changelog"))+p', 'text', /(.*)/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    QuickPicZone: {
      url: 'http://www.dcmembers.com/nod5/download/quickpiczone/',
      version: ['p:has(strong:contains("Changelog"))+p', 'text', /(.*)/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    'Scan Tailor Multi-Core': {
      url: 'http://www.dcmembers.com/nod5/download/scan-tailor-multi-core/',
      version: ['p:has(strong:contains("Changelog"))+p', 'text', /(.*)/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    SoloCrop: {
      site: {
        GitHub: 'https://github.com/nod5/SoloCrop/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Sumatra Earmarks': {
      url: 'http://www.dcmembers.com/nod5/download/sumatra-earmarks/',
      version: ['p:has(strong:contains("Changelog"))+p', 'text', /v(.*?)\s/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    TiffDjvuOcr: {
      url: 'http://www.dcmembers.com/nod5/download/tiffdjvuocr/',
      version: ['p:has(strong:contains("Changelog"))', 'text', /v(.*?)\s/],
      download: ['a.wpdm-download-link', 'onclick', /^this.href='(.*)';$/],
      install: 'install'
    },
    TwoCamControl: {
      site: {
        GitHub: 'https://github.com/nod5/TwoCamControl/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    vmPing: {
      site: {
        GitHub: 'https://github.com/R-Smith/vmPing/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    }
  }
};
