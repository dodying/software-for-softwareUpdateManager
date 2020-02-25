'use strict'

let info
let getInfo = async (res, $, fns, choice) => {
  if (info) return info

  let uri1 = $('#download_win').eq(0).attr('href')
  let res1 = await fns.req(uri1)
  let downloaderVersion = res1.body.match(/var android_link = android_type \? "(.*?)"/)[1].match(/MuMuInstaller_([\d.]+)_nochannel/)[1]

  let res2 = await fns.req({
    method: 'POST',
    uri: 'https://mumu.nie.netease.com/api/download',
    form: {
      downloader_version: downloaderVersion,
      machine: '%7B%7D'
    },
    json: true
  })
  info = res2.body.data
  return info
}

let data = {
  url: 'https://mumu.163.com/',
  version: async (res, $, fns, choice) => {
    let info = await getInfo(res, $, fns, choice)
    return info.version
  },
  download: () => info.mumu.link,
  install: info => {
    const path = require('path')
    const fse = require('fs-extra')

    // let iPathArr = iPath.split(/[\\/]+/).map(i => i)
    // iPathArr.splice(-1)
    // let parentPath
    // while (['bin', 'EmulatorShell', 'Hypervisor'].includes(iPathArr.slice(-1)[0])) {
    //   iPathArr.splice(-1)
    // }
    // parentPath = iPathArr.join('\\')

    let tmpNumber = Math.random().toString()
    let tmpFolder = path.resolve(info.fns.dirname, './unzip/', tmpNumber)
    fse.mkdirSync(tmpFolder)

    let installed = info.fns.unzip(info.output, tmpFolder)
    if (!installed) return false

    let otherFilesFolder = path.resolve(tmpFolder, 'temp')
    let otherFiles = fse.readdirSync(otherFilesFolder).map(i => path.resolve(otherFilesFolder, i)).filter(i => fse.statSync(i).isFile())
    for (let file of otherFiles) {
      let filename = path.parse(file).base
      if (path.extname(file) === '.zip') {
        if (filename === 'Hypervisor.zip') {
          let installed = info.fns.unzip(file, otherFilesFolder)
          if (!installed) return false
          fse.copySync(path.resolve(otherFilesFolder, 'hypervisor\\x64'), tmpFolder)
        } else {
          let installed = info.fns.unzip(file, tmpFolder)
          if (!installed) return false
        }
      } else {
        let fileNew = path.join(tmpFolder, filename)
        fse.copySync(file, fileNew)
      }
    }
    info.fns.copy(tmpFolder, data.parentPath, [
      /^7z\d+/g,
      'getCPUFeature.exe', 'regsvr32.exe', 'regsvr64.exe', 'vm_updater.zip', 'dpinst.exe',
      '^temp'
    ])
    return true
  },
  other: {
    hypervisor: {
      version: async (res, $, fns, choice) => {
        let info = await getInfo(res, $, fns, choice)
        return info.hypervisor.link.match(/nemu-hypervisor-([\d.]+)-x86/)[1]
      },
      download: () => info.hypervisor.link
    }
  }
}
module.exports = data
