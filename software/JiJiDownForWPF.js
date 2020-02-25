'use strict'

let data = {
  url: 'http://l.acesheep.com/bili/re.php?callback=?',
  version: async (res, $, fns) => fns.cheerio.load(JSON.parse(res.body.match(/\?\((.*)\)/)[1]).txt).text().match(/(\d+[\d.]+\d+)/)[1],
  download: async (res, $, fns) => fns.cheerio.load(JSON.parse(res.body.match(/\?\((.*)\)/)[1]).txt)('a[href$=".zip"]').attr('href'),
  install: 'install'
}
module.exports = data
