'use strict'

let data = {
  url: 'http://www.1space.dk/executor/downloadlinks.html',
  version: ['#download > ul > li:nth-child(1)', 'text', /(\d+[\d.]+\w+)\s/],
  download: 'http://www.1space.dk/executor/Executor64bit.zip',
  install: 'install'
}
module.exports = data
