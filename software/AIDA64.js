'use strict'

let data = {
  commercial: 2,
  url: 'https://www.aida64.co.uk/download',
  version: '.view-content>.pagecontent>div:nth-child(1) tbody>tr:nth-child(3)>td.version',
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://www.aida64.co.uk/news', fns, {
    selector: 'a.title'
  }, {
    selector: '.body>h3+ul',
    attr: 'html'
  })), true],
  download: '.view-content>.pagecontent>div:nth-child(1) tbody>tr:nth-child(3)>td.button>a',
  install: 'install',
  other: {
    beta: {
      version: '.view-content>.pagecontent>div:nth-child(4) tbody>tr:nth-child(2)>td.version',
      download: '.view-content>.pagecontent>div:nth-child(4) tbody>tr:nth-child(2)>td.button>a'
    },
    Engineer: {
      version: '.view-content>.pagecontent>div:nth-child(1) tbody>tr:nth-child(5)>td.version',
      download: '.view-content>.pagecontent>div:nth-child(1) tbody>tr:nth-child(5)>td.button>a'
    },
    'Engineer-beta': {
      version: '.view-content>.pagecontent>div:nth-child(4) tbody>tr:nth-child(3)>td.version',
      download: '.view-content>.pagecontent>div:nth-child(4) tbody>tr:nth-child(3)>td.button>a'
    }
  }
}
module.exports = data
