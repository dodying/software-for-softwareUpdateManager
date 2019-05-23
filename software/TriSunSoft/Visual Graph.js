'use strict'

let data = {
  commercial: 3,
  url: 'https://www.trisunsoft.com/visual-graph/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/visual-graph/visual-graph.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
