'use strict';

module.exports = {
  type: 'software-list',
  list: {
    chkssl: {
      url: 'https://download.elifulkerson.com/files/chkssl/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    },
    'clip-and-dip': {
      url: 'https://download.elifulkerson.com/files/clip-and-dip/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    },
    ips: {
      url: 'https://download.elifulkerson.com/files/ips/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    },
    linedelaypaste: {
      url: 'https://download.elifulkerson.com/files/linedelaypaste/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    },
    mturoute: {
      url: 'https://download.elifulkerson.com/files/mturoute/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    },
    'net-snmp-compiled-win32': {
      url: 'https://download.elifulkerson.com/files/net-snmp-compiled-win32/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    },
    rawsniff: {
      url: 'https://download.elifulkerson.com/files/rawsniff/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    },
    sounder: {
      url: 'https://download.elifulkerson.com/files/sounder/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    },
    tcping: {
      url: 'https://download.elifulkerson.com/files/tcping/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single',
      other: {
        x64: {
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: '.glyph+a:not([href=".."])',
            sort: true
          }, '.glyph+a[href="x64"]', '.glyph+a[href$=".exe"]')
        }
      }
    },
    voice: {
      url: 'https://download.elifulkerson.com/files/voice/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true,
        match: /(.*)/,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.glyph+a:not([href=".."])',
        sort: true
      }, '.glyph+a[href$=".exe"]'),
      install: 'install_single'
    }
  }
};
