'use strict'

let json

let data = {
  url: 'https://y.qq.com/download/download.js',
  version: (res, $) => {
    json = JSON.parse(res.body.replace(/^MusicJsonCallback\((.*)\)$/, '$1'))
    return json.data[0].Fversion.match(/[\d.]+/)[0]
  },
  changelog: (res, $) => json.data[0].Fdesc,
  download: (res, $) => json.data[0].Flink1
}
module.exports = data
