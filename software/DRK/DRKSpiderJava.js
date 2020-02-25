'use strict'

let data = {
  url: 'http://www.drk.com.ar/spider.php',
  version: 'h1',
  changelog: 'h3:contains("What\'s new")+ul',
  download: 'http://www.drk.com.ar/spider/DRKSpiderJava.zip',
  install: 'install'
}
module.exports = data
