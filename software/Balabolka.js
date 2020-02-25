'use strict'

let data = {
  url: 'http://balabolka.site/changelog.txt',
  version: (res, $) => res.body.match(/[\d-]+\s+v([\d.]+)/)[1],
  changelog: {
    match: /^[\d-]+\s+v[\d.]+$/,
    split: true
  },
  download: 'http://balabolka.site/balabolka.zip'
}
module.exports = data
