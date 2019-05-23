'use strict'

let data = {
  url: 'http://www.dcmembers.com/hamradio/download/health-reader/',
  version: {
    selector: '[class="list-group-item [hide_empty:version]"]>span',
    match: /(.*)/
  },
  download: {
    selector: 'a.wpdm-download-link',
    attr: 'onclick',
    match: /^this.href='(.*)';$/
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
