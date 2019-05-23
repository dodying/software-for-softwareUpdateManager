'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/System/Benchmarks/ATTO-Disk-Benchmark.shtml'
  },
  preferPath: 'ATTODiskBenchmark.exe',
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_zipped', null, 'install_msi_single', 'setup.msi', data.preferPath)
  }
}
module.exports = data
